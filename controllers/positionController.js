const sequelize = require('../models/db');
const { position_tbl } = require('../models/position');

exports.addPosition = async (req, res) => {
    try {
      const data = req.body
      console.log(data)
      const [db_data, created] = await position_tbl.findOrCreate({
        where: {positionName: data.positionName},
        defaults: { positionId: "82"+Date.now(), positionName: data.positionName, addedBy: data.name }
      });
      if(created){
        res.send({status: 200, data: `${data.positionName} position added successfully.`});
      }
      else{
        res.send({status: 300, data: `${data.positionName} position already exists.`});
      }
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };
  
  exports.getPositions = async (req, res) => {
    try {
      const db_data = await position_tbl.findAll({
        order: [
          ['positionName', 'ASC'],
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

  exports.deletePosition = async (req, res) => {
    const id = req.params.id;
      try {      
        const db_data = await position_tbl.destroy({
          where: {
            positionId: id
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

  exports.getPositionChartData = async (req, res) => {
    try {
      const db_data = await sequelize.query(`SELECT positionName, COUNT(positionName) AS number FROM employee_tbls WHERE positionName IN 
      (SELECT positionName from position_tbls) GROUP BY positionName ORDER BY positionName`);
      if(db_data[0].length === 0){
        res.send({status: 0, data: []})
      }
      else{
        res.send({status: 200, data: db_data[0]})
      }
      
    } catch (error) {
      res.send({status: 500, data: "There was an error."});
    }
  };