const { employee_tbl } = require('../models/employee');
const fs = require('fs');
const { salary_tbl } = require('../models/salary');

exports.employeeRegistration = async (req, res) => {
  try {
    const user = JSON.parse(req.body.user);
    const file = req.file;
    let url = file.destination + "/" + file.filename;
    const id = file.filename.split(".")[0]
    const [db_user, created] = await employee_tbl.findOrCreate(
      {
        where: { email: user.email },
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
    if (created) {
      res.send({ status: 200, data: "Employee Registered Successfully." });
    }
    else {
      try{
        fs.unlinkSync(url);
      }
      catch(err){}
      res.send({ status: 300, data: `Couldn't create, ${user.email} already exists` });
    }

  } catch (error) {
    console.log(error)
    res.send({ status: 500, data: "There was an error during the registration process" });
  }
};

exports.getEmployeeData = async (req, res) => {
  try {
    console.log(req.body)
    const db_data = await employee_tbl.findAll(
      {
        include: [
          { model: salary_tbl}
        ],
        // limit: 1
      }
    );
    if (db_data.length === 0) {
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
    res.send({ status: 500, data: "There was an error during the registration process" });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const user = req.body;

    const emp_data = await employee_tbl.findByPk(user.employeeId);
    if (emp_data !== null) {
      emp_data.fname = user.fname;
      emp_data.lname = user.lname;
      emp_data.contactNo = user.contactNo;
      emp_data.address = user.address;
      emp_data.stateName = user.stateName;
      emp_data.employeeStatus = user.employeeStatus;
      emp_data.departmentName = user.departmentName;
      emp_data.positionName = user.positionName;
      emp_data.terminationDate = user.terminationDate;

      emp_data.save();
      res.send({ status: 200, data: "Updated Employee Record Successfully." });

    } else {
      res.send({ status: 500, data: "Data Found error." });
    }
  } catch (error) {
    res.send({ status: 500, data: "There was an error." });
  }
};

exports.removeEmployee = async (req, res) => {
  try {
    const user = req.body;
    const url = "public"+user.image_url.split("public")[1];
    console.log(user);
    const db_data = await employee_tbl.destroy({
      where: {
        employeeId: user.employeeId
      },
    });
    if (db_data === 1) {
      try{
        fs.unlinkSync(url);
      }
      catch(err){}
      res.send({ status: 200, data: db_data });
    }
    else {
      res.send({ status: 300, data: db_data });
    }
  } catch (error) {
    res.send({ status: 500, data: "There was an error." });
  }
};