CREATE DATABASE escola;

\c escola;

-- Tabela Aluno
CREATE TABLE Aluno (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    data_nascimento DATE
);

-- Tabela Professor
CREATE TABLE Professor (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    especialidade VARCHAR(100) NOT NULL
);

-- Criação de visões (Views)
CREATE VIEW aluno_view AS
SELECT id, nome, email, data_nascimento
FROM Aluno;

CREATE VIEW professor_view AS
SELECT id, nome, email, especialidade
FROM Professor;
