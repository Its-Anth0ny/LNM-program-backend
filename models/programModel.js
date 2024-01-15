const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Program = sequelize.define('Program', {
  ownerUsername: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  domain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  programType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registrations: {
    type: DataTypes.ENUM('open', 'closed'),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  placementAssurance: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  universityName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  facultyProfile: {
    type: DataTypes.STRING,
  },
  learningHours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  certificate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  eligibilityCriteria: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Program;