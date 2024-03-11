const { position_tbl } = require('../models/position');

exports.addPosition = async (req, res) => {
    try {
      const data = req.body
      console.log(data)
      const [db_data, created] = await position_tbl.findOrCreate({
        where: {positionName: data.positionName},
        defaults: { position_id: "82"+Date.now(), positionName: data.positionName, addedBy: data.name }
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
            position_id: id
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