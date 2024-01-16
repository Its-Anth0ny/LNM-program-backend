const { Sequelize } = require('sequelize');
require("dotenv").config();


const sequelize = new Sequelize('herodb', 'anthony', 'anthony', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;