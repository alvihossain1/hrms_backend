const { hrmUser_tbl } = require('../models/hrmUser');
const fs = require('fs');
const { moduleAccess_tbl } = require('../models/moduleAccess');
const { getModule } = require('./moduleAccessController');

exports.hrmUserRegister = async (req, res) => {
  try {
    const user = JSON.parse(req.body.user);
    const file = req.file;
    const id = file.filename.split(".")[0]
    let url = file.destination + "/" + file.filename;    

    const [db_user, created] = await hrmUser_tbl.findOrCreate({
      where: {email: user.email},
      defaults: { userId: id, fname: user.fname, lname: user.lname, email: user.email, password: user.password, image_url: url },
    });
    console.log(db_user)
    if(created){
      let idString = id.toString();
      let moduleId = idString.slice(2, idString.length);
      moduleId = "92"+moduleId
      const modulesAll = JSON.parse(user.moduleAccess);
      const module_data = moduleAccess_tbl.create({moduleAccessId: moduleId, hrmUserId: id, ...modulesAll});
      if(module_data){
        res.send({status: 200, data: "HRM Successfully Registered."});
      }
    }
    else{
      fs.unlinkSync(url);
      res.send({status: 300, data: `Couldn't create, ${user.email} HRM already exists`});
    }    
  } catch (error) {
    res.send({status: 500, data: "There was an error during the registration process"});
  }
};

exports.hrmUserLogin = async (req, res) => {
  try {
    console.log(req.body)
    const db_data = await hrmUser_tbl.findOne({
      attributes: ["email", "fname", "lname", "image_url", "userId", "password"],
      where: {        
        email: req.body.email,
      },
    });

    if(!db_data){
      res.send({status: 0, data: []})
    }
    else{
      const moduleAccess_data = await getModule(db_data.userId);
      let data_obj = JSON.parse(JSON.stringify(db_data));
      let image_url = process.env.SERVER_URL+"/"+data_obj.image_url;
      data_obj = {...data_obj, image_url, moduleAccess: moduleAccess_data}

      res.send({status: 200, data: data_obj})
    }
    
  } catch (error) {
    res.send({status: 500, data: "There was an error"});
  }
};

// HR FUNCTIONS
exports.getAllHrUsers = async (req, res) => {
  try {
    console.log(req.body)
    const db_data = await hrmUser_tbl.findAll({
      include: [{ model: moduleAccess_tbl, attributes: {exclude: ['moduleAccessId', 'hrmUserId', 'email', 'createdAt', 'updatedAt']}}],
      attributes: ["email", "fname", "lname", "image_url", "userId"],
    });
    if (db_data[0].length === 0) {
      res.send({ status: 0, data: "not found" })
    }
    else {
      let data_arr = JSON.parse(JSON.stringify(db_data));
      data_arr = data_arr.filter(data => {
        data.image_url = process.env.SERVER_URL + "/" + data.image_url;
        return data;
      });
      res.send({ status: 200, data: data_arr });
    }
  } catch (error) {
    res.send({ status: 500, data: "There was an error" });
  }
};

exports.updateHrmUserFields = async (req, res) => {
  try {
    console.log(req.body);
    const user = req.body;
    const hr_data = await hrmUser_tbl.findByPk(user.userId);
    if (hr_data !== null) {
      hr_data.fname = user.fname;
      hr_data.lname = user.lname;
      hr_data.email = user.email;

      hr_data.save();
      res.send({ status: 200, data: "HR Employee Record Updated." });

    } else {
      res.send({ status: 500, data: "There was an error in finding data" });
    }
    
  } catch (error) {
    res.send({ status: 500, data: "There was an error" });
  }
};

exports.updateHrmUserPassword = async (req, res) => {
  try {
    console.log(req.body);
    const user = req.body;
    const hr_data = await hrmUser_tbl.findByPk(user.userId);
    if (hr_data !== null) {
      hr_data.password = user.password;

      hr_data.save();
      res.send({ status: 200, data: "HR Employee Password Updated." });

    } else {
      res.send({ status: 500, data: "There was an error in finding data" });
    }
    
  } catch (error) {
    res.send({ status: 500, data: "There was an error" });
  }
};


