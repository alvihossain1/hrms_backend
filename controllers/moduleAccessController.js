const { moduleAccess_tbl } = require("../models/moduleAccess");

exports.getModule = async (userId) => {
    const data = await moduleAccess_tbl.findOne({ 
        attributes: {exclude: ['moduleAccessId', 'hrmUserId', 'email', 'createdAt', 'updatedAt']},
        where: { hrmUserId: userId },
    });
    return JSON.stringify(data)
};

exports.updateHrmUserModule = async (req, res) => {
    try {
      console.log(req.body);
      const modules = req.body.moduleAccess;
    //   const [db_data, created] = await moduleAccess_tbl.findOrCreate({
    //     where: {hrmUserId: req.body.userId},
    //     defaults: {
    //         attendanceId: id,
    //         date: data.date,
    //         clockInTime: data.clockInTime,
    //         clockOutTime: data.clockOutTime,
    //         hoursWorked: data.hoursWorked,
    //         employeeId: data.employeeId,
    //     }
    //   })
      const module_data = await moduleAccess_tbl.findOne({where: {hrmUserId: req.body.userId}});
      if (module_data !== null) {
        module_data.dept_pos = modules.dept_pos;  
        module_data.viewEmployee = modules.viewEmployee;  
        module_data.addEmployee = modules.addEmployee;  
        module_data.updateEmployee = modules.updateEmployee;  
        module_data.salary = modules.salary;  
        module_data.attendance = modules.attendance;  
        module_data.tasks = modules.tasks;  
        module_data.leave = modules.leave;  
        module_data.statistics = modules.statistics;  

        module_data.save();
        res.send({ status: 200, data: "HR Employee Module Updated." });
  
      } else {
        res.send({ status: 500, data: "There was an error in finding data" });
      }
      
    } catch (error) {
      res.send({ status: 500, data: "There was an error" });
    }
  };