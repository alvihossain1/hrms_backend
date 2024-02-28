const { employee_tbl } = require('../models/employee');
const fs = require('fs');

exports.employeeRegistration = async (req, res) => {
  try {
    const user = JSON.parse(req.body.user);
    const file = req.file;
    let url = file.destination + "/" + file.filename;
    const id = file.filename.split(".")[0]
    const [db_user, created] = await employee_tbl.findOrCreate(
      {
        where: {email: user.email},
        defaults: {
          employeeId: id, 
          email: user.email,
          fname: user.fname,
          lname: user.lname,
          contactNo: user.contactNo,
          employeeStatus: user.employeeStatus,
          dob: user.dob,
          gender: user.gender,
          address: user.address,
          stateName: user.stateName,
          departmentName: user.departmentName, 
          positionName: user.positionName,
          hiringDate: user.hiringDate,
          terminationDate: user.terminationDate, 
          image_url: url 
        }
      }
  );
    console.log(db_user)
    if(created){
      res.send({status: 200, data: "Employee Registered Successfully."});
    }
    else{
      fs.unlinkSync(url);
      res.send({status: 500, data: `Couldn't create, ${user.email} already exists`});
    }
    
  } catch (error) {
    console.log(error)
    res.send({status: 500, data: "There was an error during the registration process"});
  }
};

exports.getEmployeeData = async (req, res) => {
  try {
    console.log(req.body)
    const db_data = await employee_tbl.findAll();
    if(db_data.length === 0){
      res.send({status: 0, data: "not found"})
    }
    else{
      let data_arr = JSON.parse(JSON.stringify(db_data));
      data_arr = data_arr.filter(data => {
        data.image_url = process.env.SERVER_URL+"/"+data.image_url;
        return data;
      });      
      res.send({status: 200, data: data_arr});
    }
  } catch (error) {
    res.send({status: 500, data: "There was an error during the registration process"});
  }
};
