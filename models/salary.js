const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { employee_tbl } = require('./employee');

const salary_tbl = sequelize.define('salary_tbl', {
  salaryId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  baseSalary: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  bonus: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  allowance: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  benefits: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  total: {
    type: DataTypes.STRING(50),
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

employee_tbl.hasOne(salary_tbl, {
  foreignKey: {
    name: "employeeId",
    type: DataTypes.UUID,
  },
  onDelete: 'CASCADE',
  onUpdate: "CASCADE",
  hooks: true,
})

salary_tbl.belongsTo(employee_tbl, {
  foreignKey: {
    name: "employeeId",
  }
});

module.exports = { salary_tbl };