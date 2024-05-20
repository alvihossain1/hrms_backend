exports.checkKey = async (req, res, next) => {
    if(req.Secret_key && req.Secret_key === "0938103*(&(*&)!(&#)%hoieqhvniofheiohinqeopveuf&*&(") next();
    else res.send({message: "You're not authorized!"}); 
}

exports.offDaysArr = ['friday', 'saturday']

exports.adminArr = [{ adminId: "9899476521536", email: "admin@gmail.com", name: "James Admin", password: "12345", image_url: "https://t3.ftcdn.net/jpg/00/65/75/68/360_F_65756860_GUZwzOKNMUU3HldFoIA44qss7ZIrCG8I.jpg" }, { adminId: "9898284758693", email: "admin2@gmail.com", name: "Roxy Admin", password: "12345", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s" }]