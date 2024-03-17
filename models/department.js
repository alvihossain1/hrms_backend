const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const department_tbl = sequelize.define('department_tbl', {
  department_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  departmentName: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  addedBy: {
    type: DataTypes.STRING(100),
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
// ,{
//   force: true
// }

);


module.exports = { department_tbl };