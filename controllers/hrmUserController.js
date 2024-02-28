const { hrmUser_tbl } = require('../models/hrmUser');
const fs = require('fs');

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
      res.send({status: 200, data: "HRM Successfully Registered."});
    }
    else{
      fs.unlinkSync(url);
      res.send({status: 500, data: `Couldn't create, ${user.email} HRM already exists`});
    }    
  } catch (error) {
    res.send({status: 500, data: "There was an error during the registration process"});
  }
};

exports.hrmUserLogin = async (req, res) => {
  try {
    console.log(req.body)
    const db_data = await hrmUser_tbl.findAll({
      attributes: ["email", "fname", "lname", "image_url"],
      where: {        
        email: req.body.email.toString(),
        password: req.body.password.toString(),
      },
    });
    if(db_data.length === 0){
      res.send({status: 500, data: "not found"})
    }
    else{
      let data_arr = JSON.parse(JSON.stringify(db_data));
      data_arr = data_arr.filter(data => {
        data.image_url = process.env.SERVER_URL+"/"+data.image_url;
        return data;
      });
      console.log(data_arr)
      res.send({status: 200, data: data_arr[0]})
    }
    
    // res.send({status: 200, data: "Login Successful."});
  } catch (error) {
    res.send({status: 500, data: "There was an error during the registration process"});
  }
};
