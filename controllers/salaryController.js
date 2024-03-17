const { employee_tbl } = require('../models/employee');
const { salary_tbl } = require('../models/salary');

exports.addSalary = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      const id = "20"+Date.now();
      const salaryCreated = await salary_tbl.create({
        salaryId: id, baseSalary: data.baseSalary, bonus: data.bonus, allowance: data.allowance, benefits: data.benefits, total: data.total, employeeId: data.employeeId,
      });
      res.send({status: 200, data: salaryCreated});
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };


  exports.updateSalary = async (req, res) => {
    try {
      const data = req.body
      console.log(data);
      
      const salary_data = await salary_tbl.findByPk(data.salaryId);
      if(salary_data !== null){
        salary_data.baseSalary = data.baseSalary;
        salary_data.bonus = data.bonus;
        salary_data.allowance = data.allowance;
        salary_data.benefits = data.benefits;
        salary_data.total = data.total;
        
        salary_data.save();
        res.send({ status: 200, data: "Salary record updated successfully." });

      }
      else{
        res.send({ status: 500, data: "Data Found error." });
      }      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };
