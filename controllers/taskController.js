const { employee_tbl } = require("../models/employee");
const { task_tbl } = require("../models/task");


exports.addTask = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const id = "22"+Date.now();
      const task_data = await task_tbl.create({
        taskId: id, taskName: data.taskName, taskDetails: data.taskDetails, dueDate: data.dueDate, hrmUserId: data.hrmUserId, employeeId: data.employeeId,
      });
      res.send({status: 200, data: "Task Added"});
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.viewAssignedTasks = async (req, res) => {
    try {
     
      const db_data = await employee_tbl.findAll({
        attributes: ['employeeId', 'fname', 'lname', 'email', 'image_url'],
        include: {
          model: task_tbl,
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

  exports.changeTaskStatus = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const task_data = await task_tbl.findByPk(data.taskId);
      task_data.taskCompleted = data.status;
      task_data.save();
      res.send({status: 200, data: `Task status changed ${data.status ? 'Done' : 'Undone'}`});
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.deleteTask = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const db_data = await task_tbl.destroy({
        where: {
          taskId: data.taskId,
          employeeId: data.employeeId,
        },
      });   
      res.send({status: 200, data: "Task Deletd"});
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };