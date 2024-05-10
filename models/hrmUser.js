const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const hrmUser_tbl = sequelize.define('hrmUser_tbl', {
  userId: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },  
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
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
    type: DataTypes.STRING(100),
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