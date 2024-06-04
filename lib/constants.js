// exports.checkKey = async (req, res, next) => {
//     if(req.Secret_key && req.Secret_key === "0938103*(&(*&)!(&#)%hoieqhvniofheiohinqeopveuf&*&(") next();
//     else res.send({message: "You're not authorized!"}); 
// }

exports.offDaysArr = ['friday', 'saturday']

exports.adminArr = [
    { adminId: "981709125370160", email: "admin@gmail.com", name: "James Admin", password: "12345", image_url: `${process.env.SERVER_URL}/public/adminProfile/admin1.jpg` },
    { adminId: "981709735459503", email: "admin2@gmail.com", name: "Roxy Admin", password: "12345", image_url: `${process.env.SERVER_URL}/public/adminProfile/admin2.png` }
]