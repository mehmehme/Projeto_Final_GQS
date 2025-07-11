const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const pool = new Pool({
    user: 'usuario',         
    host: 'localhost',
    database: 'escola',
    password: 'senha',       
    port: 5432,
});

const app = express();
app.use(bodyParser.json());

// CRUD para Alunos
app.post('/aluno', async (req, res) => {
    const { nome, email, data_nascimento } = req.body;
    const result = await pool.query(
        'INSERT INTO Aluno(nome, email, data_nascimento) VALUES ($1, $2, $3) RETURNING *',
        [nome, email, data_nascimento]
    );
    res.status(201).json(result.rows[0]);
});

app.get('/aluno', async (req, res) => {
    const result = await pool.query('SELECT * FROM Aluno');
    res.json(result.rows);
});

app.put('/aluno/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, data_nascimento } = req.body;
    const result = await pool.query(
        'UPDATE Aluno SET nome = $1, email = $2, data_nascimento = $3 WHERE id = $4 RETURNING *',
        [nome, email, data_nascimento, id]
    );
    res.json(result.rows[0]);
});

app.delete('/aluno/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Aluno WHERE id = $1', [id]);
    res.status(204).send();
});

// CRUD para Professores
app.post('/professor', async (req, res) => {
    const { nome, email, especialidade } = req.body;
    const result = await pool.query(
        'INSERT INTO Professor(nome, email, especialidade) VALUES ($1, $2, $3) RETURNING *',
        [nome, email, especialidade]
    );
    res.status(201).json(result.rows[0]);
});

app.get('/professor', async (req, res) => {
    const result = await pool.query('SELECT * FROM Professor');
    res.json(result.rows);
});

app.put('/professor/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, especialidade } = req.body;
    const result = await pool.query(
        'UPDATE Professor SET nome = $1, email = $2, especialidade = $3 WHERE id = $4 RETURNING *',
        [nome, email, especialidade, id]
    );
    res.json(result.rows[0]);
});

app.delete('/professor/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Professor WHERE id = $1', [id]);
    res.status(204).send();
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
