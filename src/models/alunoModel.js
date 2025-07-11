// models/alunoModel.js
const pool = require('../config/db'); // arquivo que configura a conexão com o banco

const Aluno = {
    async criarAluno({ nome, email, data_nascimento }) {
        const result = await pool.query(
            'INSERT INTO Aluno(nome, email, data_nascimento) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, data_nascimento]
        );
        return result.rows[0];
    },

    async listarAlunos() {
        const result = await pool.query('SELECT * FROM Aluno');
        return result.rows;
    },

    async atualizarAluno(id, { nome, email, data_nascimento }) {
        const result = await pool.query(
            'UPDATE Aluno SET nome = $1, email = $2, data_nascimento = $3 WHERE id = $4 RETURNING *',
            [nome, email, data_nascimento, id]
        );
        return result.rows[0];
    },

    async deletarAluno(id) {
        await pool.query('DELETE FROM Aluno WHERE id = $1', [id]);
    }
};

module.exports = Aluno;
