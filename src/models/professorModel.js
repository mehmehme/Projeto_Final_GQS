// models/professorModel.js
const pool = require('../config/db');

const Professor = {
    async criarProfessor({ nome, email, especialidade }) {
        const result = await pool.query(
            'INSERT INTO Professor(nome, email, especialidade) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, especialidade]
        );
        return result.rows[0];
    },

    async listarProfessores() {
        const result = await pool.query('SELECT * FROM Professor');
        return result.rows;
    },

    async atualizarProfessor(id, { nome, email, especialidade }) {
        const result = await pool.query(
            'UPDATE Professor SET nome = $1, email = $2, especialidade = $3 WHERE id = $4 RETURNING *',
            [nome, email, especialidade, id]
        );
        return result.rows[0];
    },

    async deletarProfessor(id) {
        await pool.query('DELETE FROM Professor WHERE id = $1', [id]);
    }
};

module.exports = Professor;
