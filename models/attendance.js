const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { employee_tbl } = require('./employee');

const attendance_tbl = sequelize.define('attendance_tbl', {
  attendanceId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  clockInTime: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  clockOutTime: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  hoursWorked: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}
// ,{
//   alter: true
// }

);

employee_tbl.hasMany(attendance_tbl, {
  foreignKey: {
    name: "employeeId",
    type: DataTypes.UUID,
  },
  onDelete: 'CASCADE',
  onUpdate: "CASCADE",
  hooks: true,
})

attendance_tbl.belongsTo(employee_tbl, {
  foreignKey: {
    name: "employeeId",
  }
});

module.exports = { attendance_tbl };