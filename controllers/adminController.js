const { adminArr } = require("../lib/constants");
const { hrmUser_tbl } = require("../models/hrmUser");
const { moduleAccess_tbl } = require("../models/moduleAccess");

exports.adminUserLogin = async (req, res) => {
    try {
        const admins = adminArr;
        const {email, password} = req.body;
        let found = false;
        admins.forEach(admin => {
            if(admin.email === email && admin.password === password){
                res.send({ status: 200, data: admin })
                found = true;
            }
        })
        if(!found){
            res.send({ status: 0, data: {} })
        }
    }
    catch (error) {
        res.send({ status: 500, data: "There was an error during the registration process" });
    }
};

// HR FUNCTIONS
exports.getAllHrUsers = async (req, res) => {
    try {
      console.log(req.body)
      const db_data = await hrmUser_tbl.findAll({
        include: { model: moduleAccess_tbl},
        attributes: ["email", "fname", "lname", "image_url", "userId"],
      });
      if (db_data[0].length === 0) {
        res.send({ status: 0, data: "not found" })
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
      res.send({ status: 500, data: "There was an error" });
    }
  };
  
  exports.updateHrmUserFields = async (req, res) => {
    try {
      console.log(req.body);
      const user = req.body;
      const hr_data = await hrmUser_tbl.findByPk(user.userId);
      if (hr_data !== null) {
        hr_data.fname = user.fname;
        hr_data.lname = user.lname;
        hr_data.email = user.email;
  
        hr_data.save();
        res.send({ status: 200, data: "HR Employee Record Updated." });
  
      } else {
        res.send({ status: 500, data: "There was an error in finding data" });
      }
      
    } catch (error) {
      res.send({ status: 500, data: "There was an error" });
    }
  };
  
  exports.updateHrmUserPassword = async (req, res) => {
    try {
      console.log(req.body);
      const user = req.body;
      const hr_data = await hrmUser_tbl.findByPk(user.userId);
      if (hr_data !== null) {
        hr_data.password = user.password;

        hr_data.save();
        res.send({ status: 200, data: "HR Employee Password Updated." });
  
      } else {
        res.send({ status: 500, data: "There was an error in finding data" });
      }
      
    } catch (error) {
      res.send({ status: 500, data: "There was an error" });
    }
  };
  

  