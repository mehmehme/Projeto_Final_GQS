// controllers/alunoController.js
const Aluno = require('../models/alunoModel');

const alunoController = {
    async criarAluno(req, res) {
        try {
            const aluno = await Aluno.criarAluno(req.body);
            res.status(201).json(aluno);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async listarAlunos(req, res) {
        try {
            const alunos = await Aluno.listarAlunos();
            res.status(200).json(alunos);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async atualizarAluno(req, res) {
        try {
            const aluno = await Aluno.atualizarAluno(req.params.id, req.body);
            res.status(200).json(aluno);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async deletarAluno(req, res) {
        try {
            await Aluno.deletarAluno(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = alunoController;
