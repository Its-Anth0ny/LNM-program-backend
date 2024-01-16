const { Sequelize } = require('sequelize');
require("dotenv").config();


const sequelize = new Sequelize('herodashdb', 'anthony', 'XWC0iAqAQ6b1SgZ475Q4cLlePEaw8GKf', {
    host: 'dpg-cmj34c8l5elc73epem2g-a.singapore-postgres.render.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: false,
          rejectUnauthorized: false,
        },
      },
});

module.exports = sequelize;