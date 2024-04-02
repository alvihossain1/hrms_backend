const { employee_tbl } = require("../models/employee");
const { leave_tbl } = require("../models/leave");


exports.assignLeave = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const id = "23"+Date.now();
      const leave_data = await leave_tbl.create({
        leaveId: id, leaveType: data.leaveType, leaveReason: data.leaveReason, startDate: data.startDate, endDate: data.endDate,
        employeeId: data.employeeId, hrmUserId: data.hrmUserId, 
      });
      res.send({status: 200, data: "Leave application assigned"});
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.viewAssignedLeaveApp = async (req, res) => {
    try {
     
      const db_data = await employee_tbl.findAll({
        attributes: ['employeeId', 'fname', 'lname', 'email', 'image_url'],
        include: {
          model: leave_tbl,
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

  exports.updateLeaveApp = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const leave_data = await leave_tbl.findByPk(data.leaveId);
      leave_data.leaveType = data.leaveType;
      leave_data.leaveReason = data.leaveReason;
      leave_data.startDate = data.startDate;
      leave_data.endDate = data.endDate;
      leave_data.save();
      res.send({status: 200, data: "Leave application updated"});
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.deleteLeaveApp = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const db_data = await leave_tbl.destroy({
        where: {
          leaveId: data.leaveId,
        },
      });   
      res.send({status: 200, data: "Leave application deleted"});
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };