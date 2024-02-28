const { department_tbl } = require('../models/department');

exports.addDepartment = async (req, res) => {
    try {
      const data = req.body
      console.log(data)
      const db_data = await department_tbl.create({ department_id: "81"+Date.now(), departmentName: data.departmentName, addedBy: data.name });
      res.send({status: 200, data: "Department Successfully added."});
    } catch (error) {
      res.send({status: 500, data: "There was an error during"});
    }
  };
  
  exports.getDepartments = async (req, res) => {
    try {
      const db_data = await department_tbl.findAll();
      if(db_data.length === 0){
        res.send({status: 0, data: []})
      }
      else{
        res.send({status: 200, data: db_data})
      }
      
    } catch (error) {
      res.send({status: 500, data: "There was an error during the registration process"});
    }
  };

  exports.deleteDepartment = async (req, res) => {
    const id = req.params.id.split(":");
      try {      
        const db_data = await department_tbl.destroy({
          where: {
            department_id: id
          },
        });        
        if(db_data.length === 0){
          res.send({status: 0, data: []})
        }
        else{
          res.send({status: 200, data: db_data})
        }
        
        // res.send({status: 200, data: "Login Successful."});
      } catch (error) {
        res.send({status: 500, data: "There was an error during the registration process"});
      }
   
  };