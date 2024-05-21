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
                found = true;
                res.send({ status: 200, data: admin })
            }
            else if(admin.email === email && admin.password !== password){
              found = true;
              res.send({ status: 500, data: [] })
            }
        })
        if(!found){
            res.send({ status: 0, data: [] })
        }
    }
    catch (error) {
        res.send({ status: 500, data: "There was an error" });
    }
};


  

  