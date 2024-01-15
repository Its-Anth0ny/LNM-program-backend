// Importing modules
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userAuth = require('../middleware/userAuth');

// Handle signup form submission with user authentication middleware
router.post('/signup', userAuth.saveUser, async (req, res, next) => {
    try {
        // Call the signup function from the controller
        await userController.signup(req, res);
        // Send a JSON response for successful signup
        res.json({ success: true });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
});

// Handle login form submission
router.post('/login', userController.login);

// Export the router
module.exports = router;