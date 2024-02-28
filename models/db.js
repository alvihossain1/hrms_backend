const { Sequelize } = require('sequelize');
require('dotenv').config()
const {DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PATH, DB_TYPE } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_TYPE,
    storage: DB_PATH,
  });


module.exports = sequelize;