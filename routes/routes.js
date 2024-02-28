const express = require('express');
const { hrmUserRegister , hrmUserLogin } = require('../controllers/hrmUserController');
const { employeeRegistration, getEmployeeData } = require('../controllers/employeeController');
const { addDepartment, getDepartments, deleteDepartment } = require('../controllers/departmentController');
const { addPosition, getPositions, deletePosition } = require('../controllers/positionController');
const { multerHrmProfileUpload, multerEmployeeProfileUpload } = require('../controllers/uploadsController');
const router = express.Router();


router.post("/hrmUserRegister", multerHrmProfileUpload().single("image"), hrmUserRegister);
router.post("/hrmUserLogin", hrmUserLogin);

router.delete("/user/department:id", deleteDepartment);
router.post("/user/department", addDepartment);
router.get("/user/department", getDepartments);

router.delete("/user/position:id", deletePosition);
router.post("/user/position", addPosition);
router.get("/user/position", getPositions);

router.post("/employee/employee", multerEmployeeProfileUpload().single("image"), employeeRegistration);
router.get("/employee/employee", getEmployeeData);

module.exports = router;