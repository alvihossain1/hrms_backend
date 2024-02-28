const multer  = require('multer');

exports.multerHrmProfileUpload = () =>{
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            return cb(null, "public/hrmProfile")
        },
        filename: function(req, file, cb){
            // let object = JSON.parse(req.body.user)
            let extArray = file.mimetype.split("/");
            let extension = extArray[extArray.length - 1];
            return cb(null, `${"91"+Date.now()}.${extension}`)
        }
    })
    const upload = multer({storage});
    return upload;
}


exports.multerEmployeeProfileUpload = () =>{
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            return cb(null, "public/employeeProfile")
        },
        filename: function(req, file, cb){
            // let object = JSON.parse(req.body.user);
            let extArray = file.mimetype.split("/");
            let extension = extArray[extArray.length - 1];
            return cb(null, `${"10"+Date.now()}.${extension}`)
        }
    })
    const upload = multer({storage});
    return upload;
}
