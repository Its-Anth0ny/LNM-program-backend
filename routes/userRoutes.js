// Importing modules
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userAuth = require("../middleware/userAuth");

router.post("/signup", userAuth.saveUser, async (req, res, next) => {
    try {
        // Call the signup function from the controller
        await userController.signup(req, res);
        // Send a JSON response for successful signup
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
});

router.post("/login", userController.login);

router.get("/logout", async (req, res) => {
    console.log("Logging out");
    res.clearCookie("jwt").status(200).send("Logged out successfully");
});
// router.get("/logout", userAuth.verifyUser, async (req, res) => {
//     try {
//         // Send a JSON response for successful authentication
//         res.json({ success: true });
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error" }); // Pass the error to the error handling middleware
//     }
// });

// Export the router
module.exports = router;
