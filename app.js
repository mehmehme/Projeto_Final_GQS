// app.js
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

// Configuração do Pool de conexão com o PostgreSQL
const pool = new Pool({
    user: 'usuario',         // seu usuário postgres
    host: 'localhost',
    database: 'escola',
    password: 'senha',       // sua senha do postgres
    port: 5432,
});

const app = express();
app.use(bodyParser.json());

// Controllers
const alunoController = require('./controllers/alunoController');
const professorController = require('./controllers/professorController');

// Rotas para Alunos
app.post('/aluno', alunoController.criarAluno);
app.get('/aluno', alunoController.listarAlunos);
app.put('/aluno/:id', alunoController.atualizarAluno);
app.delete('/aluno/:id', alunoController.deletarAluno);

// Rotas para Professores
app.post('/professor', professorController.criarProfessor);
app.get('/professor', professorController.listarProfessores);
app.put('/professor/:id', professorController.atualizarProfessor);
app.delete('/professor/:id', professorController.deletarProfessor);

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;
