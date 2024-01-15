const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to ensure authentication for all routes
router.use(authMiddleware);

// Route to get all programs
router.get('/', programController.getAllPrograms);

// Route to create a new program
router.post('/', programController.createProgram);

// Route to update a program by ID
router.put('/:id', programController.updateProgram);

// Route to delete a program by ID
router.delete('/:id', programController.deleteProgram);

// Exporting the router
module.exports = router;
