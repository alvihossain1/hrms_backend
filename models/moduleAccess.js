const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { hrmUser_tbl } = require('./hrmUser');

const moduleAccess_tbl = sequelize.define('moduleAccess_tbl', {
  moduleAccessId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  dept_pos: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  viewEmployee: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  addEmployee: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  updateEmployee: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  salary: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  attendance: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  tasks: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  leave: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  statistics: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
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

hrmUser_tbl.hasOne(moduleAccess_tbl, {
  foreignKey: {
    name: "hrmUserId",
    type: DataTypes.UUID,
  },
  onDelete: 'CASCADE',
  onUpdate: "CASCADE",
  hooks: true,
})

moduleAccess_tbl.belongsTo(hrmUser_tbl, {
  foreignKey: {
    name: "hrmUserId",
  }
});

module.exports = { moduleAccess_tbl };