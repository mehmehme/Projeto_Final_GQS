const request = require('supertest');
const app = require('../app');  // Caminho do seu arquivo app.js

app.listen(3000, () => console.log('Rodando...'));

describe('Testes CRUD Aluno', () => {
    it('Deve criar um aluno', async () => {
        const res = await request(app)
            .post('/aluno')
            .send({
                nome: 'João Silva',
                email: 'joao@teste.com',
                data_nascimento: '2000-01-01',
            });
        expect(res.status).toBe(201);
        expect(res.body.nome).toBe('João Silva');
    });

    it('Deve retornar a lista de alunos', async () => {
        const res = await request(app).get('/aluno');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('Deve atualizar um aluno', async () => {
        const res = await request(app)
            .put('/aluno/1')  // ID fictício
            .send({ nome: 'João Pedro' });
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('João Pedro');
    });

    it('Deve deletar um aluno', async () => {
        const res = await request(app).delete('/aluno/1');
        expect(res.status).toBe(204);
    });
});

describe('Testes CRUD Professor', () => {
    it('Deve criar um professor', async () => {
        const res = await request(app)
            .post('/professor')
            .send({
                nome: 'Maria Oliveira',
                email: 'maria@teste.com',
                especialidade: 'Matemática',
            });
        expect(res.status).toBe(201);
        expect(res.body.nome).toBe('Maria Oliveira');
    });

    it('Deve retornar a lista de professores', async () => {
        const res = await request(app).get('/professor');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('Deve atualizar um professor', async () => {
        const res = await request(app)
            .put('/professor/1')  // ID fictício
            .send({ nome: 'Maria Souza' });
        expect(res.status).toBe(200);
        expect(res.body.nome).toBe('Maria Souza');
    });

    it('Deve deletar um professor', async () => {
        const res = await request(app).delete('/professor/1');
        expect(res.status).toBe(204);
    });
});
