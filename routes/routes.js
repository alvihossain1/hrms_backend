const express = require('express');
const { hrmUserRegister , hrmUserLogin, getAllHrUsers, updateHrmUserFields, updateHrmUserPassword } = require('../controllers/hrmUserController');
const { employeeRegistration, getEmployeeData, updateEmployee, removeEmployee, getEmployeeDataMinFields } = require('../controllers/employeeController');
const { addDepartment, getDepartments, deleteDepartment } = require('../controllers/departmentController');
const { addPosition, getPositions, deletePosition } = require('../controllers/positionController');
const { multerHrmProfileUpload, multerEmployeeProfileUpload } = require('../controllers/uploadsController');
const { addSalary, updateSalary } = require('../controllers/salaryController');
const { addAttendance, getEmployeeByDateAttendance, getEmployeeByDateAttended, addAttendanceManual, getAttendanceChartData, getEmployeeMonthlyAttendance } = require('../controllers/attendanceController');
const { addTask, viewAssignedTasks, deleteTask, changeTaskStatus, updateTask, getAllTasksStatus } = require('../controllers/taskController');
const { assignLeave, viewAssignedLeaveApp, deleteLeaveApp, updateLeaveApp } = require('../controllers/leaveController');
const { adminUserLogin } = require('../controllers/adminController');
const { updateHrmUserModule } = require('../controllers/moduleAccessController');
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
router.get("/user/attendance/month/:month/id/:id", getEmployeeMonthlyAttendance);
router.get("/user/attendance/notIn/:date", getEmployeeByDateAttendance);
router.get("/user/attendance/in/:date", getEmployeeByDateAttended);
router.get("/user/attendance/charts/:month", getAttendanceChartData);
router.post("/user/attendance/manual", addAttendanceManual);
router.post("/user/attendance", addAttendance);

// TASK
router.put("/user/task/complete", changeTaskStatus);
router.get("/user/task/charts", getAllTasksStatus);
router.put("/user/task", updateTask);
router.post("/user/task", addTask);
router.get("/user/task", viewAssignedTasks);
router.delete("/user/task", deleteTask);

// LEAVE
router.post("/user/leave", assignLeave);
router.get("/user/leave", viewAssignedLeaveApp);
router.put("/user/leave", updateLeaveApp);
router.delete("/user/leave", deleteLeaveApp);

// ADMIN
router.post("/admin/login", adminUserLogin);
router.post("/admin/hrUser/updateFields", updateHrmUserFields);
router.post("/admin/hrUser/updatePassword", updateHrmUserPassword);
router.post("/admin/hrUser/updateModule", updateHrmUserModule);
router.get("/admin/hrUser", getAllHrUsers);


module.exports = router;