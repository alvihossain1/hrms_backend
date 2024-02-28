const { position_tbl } = require('../models/position');

exports.addPosition = async (req, res) => {
    try {
      const data = req.body
      console.log(data)
      const db_data = await position_tbl.create({ position_id: "82"+Date.now(), positionName: data.positionName, addedBy: data.name });
      res.send({status: 200, data: "Position Successfully added."});
    } catch (error) {
      res.send({status: 500, data: "There was an error during"});
    }
  };
  
  exports.getPositions = async (req, res) => {
    try {
      const db_data = await position_tbl.findAll();
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

  exports.deletePosition = async (req, res) => {
    const id = req.params.id.split(":");
      try {      
        const db_data = await position_tbl.destroy({
          where: {
            position_id: id
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