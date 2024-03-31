const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { employee_tbl } = require('./employee');
const { hrmUser_tbl } = require('./hrmUser');

const task_tbl = sequelize.define('task_tbl', {
  taskId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  taskName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  taskDetails: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  taskCompleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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

employee_tbl.hasMany(task_tbl, {
  foreignKey: {
    name: "employeeId",
    type: DataTypes.UUID,
  },
  onDelete: 'CASCADE',
  onUpdate: "CASCADE",
  hooks: true,
})

task_tbl.belongsTo(employee_tbl, {
  foreignKey: {
    name: "employeeId",
  }
});

hrmUser_tbl.hasMany(task_tbl, {
    foreignKey: {
      name: "hrmUserId",
      type: DataTypes.UUID,
    },
    onDelete: 'CASCADE',
    onUpdate: "CASCADE",
    hooks: true,
  })
  
  task_tbl.belongsTo(hrmUser_tbl, {
    foreignKey: {
      name: "hrmUserId",
    }
  });

module.exports = { task_tbl };