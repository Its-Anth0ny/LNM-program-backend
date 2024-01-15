const Program = require('../models/programModel');
const { Op } = require('sequelize');

const getAllPrograms = async (req, res) => {
    try {
        const searchTerm = req.query.search;
        const whereClause = searchTerm ? { name: { [Op.iLike]: `%${searchTerm}%` } } : {};
        const programs = await Program.findAll({ where: whereClause });
        res.json(programs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProgram = async (req, res) => {
    try {
        const newProgram = await Program.create(req.body);
        res.json(newProgram);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createNewProgram = async (req, res) => {
    try {
        const newProgram = await Program.create(req.body);
        res.json(newProgram);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProgram = async (req, res) => {
    try {
        const updatedProgram = await Program.update(req.body, { where: { id: req.params.id } });
        res.json(updatedProgram);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProgram = async (req, res) => {
    try {
        await Program.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Program deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { 
    getAllPrograms, 
    createProgram, 
    createNewProgram, 
    updateProgram, 
    deleteProgram 
};
