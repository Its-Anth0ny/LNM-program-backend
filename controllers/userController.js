const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
const User = require("../models/userModel")(sequelize, DataTypes);

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const data = {
            username,
            email,
            password: await bcrypt.hash(password, 10),
        };
        const user = await User.create(data);

        if (user) {
            let token = jwt.sign({ id: user.id }, "secretkey", {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, {
                maxAge: 1 * 24 * 60 * 60,
                sameSite: "none",
                httpOnly: false,
            });
            // console.log("user", JSON.stringify(user, null, 2));
            // console.log(token);
            return res.status(201).send(user);
        } else {
            return res.status(409).send("Details are not correct");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });

        if (user) {
            const isSame = await bcrypt.compare(password, user.password);

            if (isSame) {
                let token = jwt.sign({ id: user.id }, "secretkey", {
                    expiresIn: 1 * 24 * 60 * 60 * 1000,
                });

                res.cookie("jwt", token, {
                    maxAge: 1 * 24 * 60 * 60,
                    sameSite: "none",
                    httpOnly: false,
                });
                console.log("user", JSON.stringify(user, null, 2));
                console.log(token);
                return res.status(201).send(user);
            } else {
                console.log("Authentication failed");
                return res.status(401).send("Authentication failed");
            }
        } else {
            console.log("Authentication failed");
            return res.status(401).send("Authentication failed");
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = { signup, login };

// const logout = (req, res) => {
//   try {
//     // Clear the JWT cookie by setting it to expire immediately
//     res.clearCookie("jwt").status(200).send("Logged out successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Something went wrong" });
//   }
// };

// module.exports = { signup, login, logout };
