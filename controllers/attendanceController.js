const { createAttendanceReport } = require('../lib/attendanceReport');
const { attendance_tbl } = require('../models/attendance');
const sequelize = require('../models/db');
const { employee_tbl } = require('../models/employee');

exports.addAttendance = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const id = "21"+Date.now();
      const [db_data, created] = await attendance_tbl.findOrCreate({
        where: {date: data.date, employeeId: data.employeeId},
        defaults: {
            attendanceId: id,
            date: data.date,
            clockInTime: data.clockInTime,
            clockOutTime: data.clockOutTime,
            hoursWorked: data.hoursWorked,
            employeeId: data.employeeId,
        }
      })
      if(created){
          res.send({status: 200, data: "Attendance Recorded"});
      }
      else{
        res.send({status: 300, data: "Employee attendance already recorded"});
      }
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.getEmployeeByDateAttendance = async (req, res) => {
    try {
      const date = req.params.date
      console.log("DATE::  ", date);
      
      const db_data = await sequelize.query(`SELECT employeeId, fname, lname, email, image_url FROM employee_tbls WHERE employeeId NOT IN (
        SELECT employeeId FROM attendance_tbls WHERE date = '${date}'
      )`);
      if (db_data[0].length === 0) {
        res.send({ status: 0, data: [] })
      }
      else {
        let data_arr = JSON.parse(JSON.stringify(db_data));
        data_arr = data_arr[0]
        data_arr = data_arr.filter(data => {
          data.image_url = process.env.SERVER_URL + "/" + data.image_url;
          return data;
        });
        res.send({ status: 200, data: data_arr });
      }
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };


  exports.getEmployeeByDateAttended = async (req, res) => {
    try {
      const date = req.params.date
      console.log("DATE::  ", date);
      
      const db_data = await employee_tbl.findAll({
        attributes: ['employeeId', 'fname', 'lname', 'email', 'image_url'],
        include: {
          model: attendance_tbl,
          where: {
            date: date
          }
        }
      });

      if (db_data.length === 0) {
        res.send({ status: 0, data: [] })
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
      res.send({status: 500, data: "There was an error."});
    }
  };
  

  exports.addAttendanceManual = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const id = "21"+Date.now();
      const [db_data, created] = await attendance_tbl.findOrCreate({
        where: {date: data.date, employeeId: data.employeeId},
        defaults: {
            attendanceId: id,
            date: data.date,
            clockInTime: data.clockInTime,
            clockOutTime: data.clockOutTime,
            hoursWorked: data.hoursWorked,
            employeeId: data.employeeId,
        }
      })
      if(created){
          res.send({status: 200, data: "Attendance recorded"});
      }
      else{
        db_data.date = data.date,
        db_data.clockInTime = data.clockInTime,
        db_data.clockOutTime = data.clockOutTime,
        db_data.hoursWorked = data.hoursWorked,
        db_data.save();
        res.send({status: 200, data: "Attendance updated"});
      }


    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.getAttendanceChartData = async (req, res) => {
    try {
      let month = req.params.month;    

      const db_data = await sequelize.query(`SELECT DISTINCT date, COUNT(date) AS number FROM attendance_tbls WHERE date BETWEEN "${month}-01" AND "${month}-31" GROUP BY date ORDER BY date`);
      if (db_data[0].length === 0 ) {
        res.send({ status: 0, data: [] })
      }
      else {        
        res.send({ status: 200, data: db_data[0] });
      }
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.getEmployeeMonthlyAttendance = async (req, res) => {
    try {
      console.log(req.params)
      const month = req.params.month;    
      const employeeId = req.params.id

      const db_data = await sequelize.query(`SELECT date, clockInTime, clockOutTime, hoursWorked FROM attendance_tbls WHERE employeeId = '${employeeId}' AND DATE BETWEEN '${month}-01' AND '${month}-31' ORDER BY date`);
      if (db_data[0].length === 0 ) {
        res.send({ status: 0, data: [] })
      }
      else {  
        const newData = createAttendanceReport(month, db_data[0])      
        res.send({ status: 200, data: newData });
      }
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

