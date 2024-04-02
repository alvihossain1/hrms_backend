const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { employee_tbl } = require('./employee');
const { hrmUser_tbl } = require('./hrmUser');

const leave_tbl = sequelize.define('leave_tbl', {
    leaveId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    leaveType: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    leaveReason: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATEONLY,
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

employee_tbl.hasMany(leave_tbl, {
    foreignKey: {
        name: "employeeId",
        type: DataTypes.UUID,
    },
    onDelete: 'CASCADE',
    onUpdate: "CASCADE",
    hooks: true,
})

leave_tbl.belongsTo(employee_tbl, {
    foreignKey: {
        name: "employeeId",
    }
});

hrmUser_tbl.hasMany(leave_tbl, {
    foreignKey: {
        name: "hrmUserId",
        type: DataTypes.UUID,
    },
    onDelete: 'CASCADE',
    onUpdate: "CASCADE",
    hooks: true,
})

leave_tbl.belongsTo(hrmUser_tbl, {
    foreignKey: {
        name: "hrmUserId",
    }
});


module.exports = { leave_tbl };