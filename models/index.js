const { Sequelize, DataTypes } = require('sequelize');

// Database connection with PostgreSQL dialect
const sequelize = new Sequelize('postgres://postgres:10293@localhost:5432/login_register', {
    dialect: 'postgres',
});

// Checking if the connection is successful
sequelize.authenticate()
    .then(() => console.log('Database connected to discover'))
    .catch((err) => console.log(err));

// Initializing Sequelize and connecting to the user model
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./userModel')(sequelize, DataTypes);

// Exporting the module
module.exports = db;