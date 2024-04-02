const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const position_tbl = sequelize.define('position_tbl', {
  positionId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  positionName: {
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


module.exports = { position_tbl };