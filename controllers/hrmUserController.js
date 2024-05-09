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
    // Module Handling
    let idString = id.toString();
    let moduleId = idString.slice(2, idString.length);
    moduleId = "92"+moduleId;

    const [db_user, created] = await hrmUser_tbl.findOrCreate({
      where: {email: user.email},
      defaults: { userId: id, fname: user.fname, lname: user.lname, email: user.email, password: user.password, image_url: url, moduleAccessId: moduleId },
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

    const moduleAccess_data = await getModule(db_data.userId);
    if(db_data.length === 0){
      res.send({status: 500, data: "not found"})
    }
    else{
      let data_obj = JSON.parse(JSON.stringify(db_data));
      let image_url = process.env.SERVER_URL+"/"+data_obj.image_url;
      data_obj = {...data_obj, image_url, moduleAccess: moduleAccess_data}

      res.send({status: 200, data: data_obj})
    }
    
  } catch (error) {
    res.send({status: 500, data: "There was an error during the registration process"});
  }
};



