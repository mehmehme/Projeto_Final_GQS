// controllers/professorController.js
const Professor = require('../models/professorModel');

const professorController = {
    async criarProfessor(req, res) {
        try {
            const professor = await Professor.criarProfessor(req.body);
            res.status(201).json(professor);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async listarProfessores(req, res) {
        try {
            const professores = await Professor.listarProfessores();
            res.status(200).json(professores);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async atualizarProfessor(req, res) {
        try {
            const professor = await Professor.atualizarProfessor(req.params.id, req.body);
            res.status(200).json(professor);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deletarProfessor(req, res) {
        try {
            await Professor.deletarProfessor(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = professorController;
