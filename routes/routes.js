const express = require('express');
const { hrmUserRegister , hrmUserLogin } = require('../controllers/hrmUserController');
const { employeeRegistration, getEmployeeData, updateEmployee, removeEmployee, getEmployeeDataMinFields } = require('../controllers/employeeController');
const { addDepartment, getDepartments, deleteDepartment } = require('../controllers/departmentController');
const { addPosition, getPositions, deletePosition } = require('../controllers/positionController');
const { multerHrmProfileUpload, multerEmployeeProfileUpload } = require('../controllers/uploadsController');
const { addSalary, updateSalary } = require('../controllers/salaryController');
const { addAttendance, getEmployeeByDateAttendance, getEmployeeByDateAttended, addAttendanceManual } = require('../controllers/attendanceController');
const { addTask, viewAssignedTasks, deleteTask, changeTaskStatus } = require('../controllers/taskController');
const router = express.Router();

// HRM
router.post("/hrmUserRegister", multerHrmProfileUpload().single("image"), hrmUserRegister);
router.post("/hrmUserLogin", hrmUserLogin);

// DEPARTMENT
router.delete("/user/department/:id", deleteDepartment);
router.post("/user/department", addDepartment);
router.get("/user/department", getDepartments);

// POSITION
router.delete("/user/position/:id", deletePosition);
router.post("/user/position", addPosition);
router.get("/user/position", getPositions);

// EMPLOYEE
router.post("/user/employee", multerEmployeeProfileUpload().single("image"), employeeRegistration);
router.get("/user/employee/minFields", getEmployeeDataMinFields);
router.get("/user/employee", getEmployeeData);
router.put("/user/employee", updateEmployee);
router.delete("/user/employee", removeEmployee);

// SALARY
router.post("/user/salary", addSalary);
router.put("/user/salary", updateSalary);

// ATTENDANCE
router.get("/user/attendance/notIn/:date", getEmployeeByDateAttendance);
router.get("/user/attendance/in/:date", getEmployeeByDateAttended);
router.post("/user/attendance/manual", addAttendanceManual);
router.post("/user/attendance", addAttendance);

// TASK
router.put("/user/task/complete", changeTaskStatus);
router.post("/user/task", addTask);
router.get("/user/task", viewAssignedTasks);
router.delete("/user/task", deleteTask);

module.exports = router;