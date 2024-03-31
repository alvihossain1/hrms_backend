const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const employee_tbl = sequelize.define('employee_tbl', {
  employeeId: {
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
  contactNo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  employeeStatus: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },  
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(20),
    allowNull: false,
  }, 
  email: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false,
  }, 
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  }, 
  stateName: {
    type: DataTypes.STRING(20),
    allowNull: false,
  }, 
  departmentName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }, 
  positionName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }, 
  hiringDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  terminationDate: {
    type: DataTypes.DATEONLY,
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


module.exports = { employee_tbl };