const { department_tbl } = require('../models/department');

exports.addDepartment = async (req, res) => {
    try {
      const data = req.body
      console.log(data)
      const [db_data, created] = await department_tbl.findOrCreate({
        where: {departmentName: data.departmentName},
        defaults: { department_id: "81"+Date.now(), departmentName: data.departmentName, addedBy: data.name }
      });
      if(created){
        res.send({status: 200, data: `${data.departmentName} department added successfully.`});
      }
      else{
        res.send({status: 300, data: `${data.departmentName} department already exists.`});
      }      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };
  
  exports.getDepartments = async (req, res) => {
    try {
      const db_data = await department_tbl.findAll({
        order: [
          ['departmentName', 'ASC'],
        ]
      });
      if(db_data.length === 0){
        res.send({status: 0, data: []})
      }
      else{
        res.send({status: 200, data: db_data})
      }
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };

  exports.deleteDepartment = async (req, res) => {
    const id = req.params.id;
      try {      
        const db_data = await department_tbl.destroy({
          where: {
            department_id: id
          },
        });
        if(db_data === 1){
          res.send({status: 200, data: db_data});
        }
        else{
          res.send({status: 300, data: db_data});
        } 

      } catch (error) {
        res.send({status: 500, data: "There was an error."});
      }
   
  };