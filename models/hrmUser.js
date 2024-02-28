const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const hrmUser_tbl = sequelize.define('hrmUser_tbl', {
  userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },  
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },  
  fname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
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


module.exports = { hrmUser_tbl };