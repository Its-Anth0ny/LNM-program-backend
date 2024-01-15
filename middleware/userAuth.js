const sequelize = require("../db/connection");
const { DataTypes } = require('sequelize');
const User = require('../models/userModel')(sequelize, DataTypes);

const saveUser = async (req, res, next) => {
  try {
    const username = await User.findOne({
      where: { username: req.body.username },
    });

    if (username) {
      return res.status(409).send("Username already taken");
    }

    const emailCheck = await User.findOne({
      where: { email: req.body.email },
    });

    if (emailCheck) {
      return res.status(409).send("Email already exists");
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  saveUser,
};