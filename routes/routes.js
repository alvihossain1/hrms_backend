const express = require('express');
const { hrmUserRegister , hrmUserLogin } = require('../controllers/hrmUserController');
const { employeeRegistration, getEmployeeData, updateEmployee, removeEmployee } = require('../controllers/employeeController');
const { addDepartment, getDepartments, deleteDepartment } = require('../controllers/departmentController');
const { addPosition, getPositions, deletePosition } = require('../controllers/positionController');
const { multerHrmProfileUpload, multerEmployeeProfileUpload } = require('../controllers/uploadsController');
const { addSalary, updateSalary } = require('../controllers/salaryController');
const { addAttendance, getEmployeeByDateAttendance, getEmployeeByDateAttended } = require('../controllers/attendanceController');
const router = express.Router();


router.post("/hrmUserRegister", multerHrmProfileUpload().single("image"), hrmUserRegister);
router.post("/hrmUserLogin", hrmUserLogin);

router.delete("/user/department/:id", deleteDepartment);
router.post("/user/department", addDepartment);
router.get("/user/department", getDepartments);

router.delete("/user/position/:id", deletePosition);
router.post("/user/position", addPosition);
router.get("/user/position", getPositions);

router.post("/user/employee", multerEmployeeProfileUpload().single("image"), employeeRegistration);
router.get("/user/employee", getEmployeeData);
router.put("/user/employee", updateEmployee);
router.delete("/user/employee", removeEmployee);

// SALARY
router.post("/user/salary", addSalary);
router.put("/user/salary", updateSalary);

// ATTENDANCE
router.get("/user/attendance/notIn/:date", getEmployeeByDateAttendance);
router.get("/user/attendance/in/:date", getEmployeeByDateAttended);
router.post("/user/attendance", addAttendance);

module.exports = router;