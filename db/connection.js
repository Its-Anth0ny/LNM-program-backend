const { Sequelize } = require('sequelize');
require("dotenv").config();


const sequelize = new Sequelize('herodb', 'anthony', 'anthony', {
    host: 'localhost',
    dialect: 'postgres'
});
// const sequelize = new Sequelize(process.env.DB_URL, {
//   dialect: "postgres",
//   logging: false,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },


// });
module.exports = sequelize;