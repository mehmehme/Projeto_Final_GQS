# Cadastro de Alunos e Professores

Este projeto é uma aplicação simples para o cadastro de alunos e professores, utilizando um banco de dados SQL, testes unitários com Jest e testes de integração com Cypress.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework para construção da API
- **SQL**: Banco de dados relacional para armazenar informações de alunos e professores
- **Jest**: Framework de testes unitários
- **Cypress**: Framework para testes end-to-end

## Estrutura do Projeto

/cadastro-alunos-professores
├── /node_modules # Dependências do projeto
├── /src # Código fonte da aplicação
│ ├── /controllers # Controladores para a API
│ ├── /models # Modelos de dados (Aluno e Professor)
│ └── /routes # Definição das rotas
├── /tests # Testes
│ ├── /unit # Testes unitários com Jest
│ └── /e2e # Testes de integração com Cypress
├── .env # Variáveis de ambiente (banco de dados, etc.)
├── package.json # Dependências e scripts
└── README.md # Este arquivo

bash
Copiar
Editar

## Instalação

### 1. Clonando o repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/cadastro-alunos-professores.git
```
cd cadastro-alunos-professores
### 2. Instalando as dependências
Certifique-se de que o Node.js e o npm estão instalados. Se não, instale o Node.js a partir do site oficial.

Depois, instale as dependências do projeto:

```bash
Copiar
Editar
npm install
```
### 3. Configurando o banco de dados
Antes de executar a aplicação, crie um banco de dados SQL (MySQL, PostgreSQL ou SQLite) e configure a conexão no arquivo .env. O formato básico do arquivo .env deve ser:

env
Copiar
Editar
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=senha
DB_NAME=cadastro
### 4. Executando o servidor
Após configurar o banco de dados, inicie o servidor da aplicação:

```bash
Copiar
Editar
npm start
```
Isso vai iniciar o servidor na porta 3000, que é o padrão. A aplicação estará disponível em http://localhost:3000.

### Execução de Testes
### 1. Testes Unitários (Jest)
Para rodar os testes unitários com Jest, use o seguinte comando:

```bash
Copiar
Editar
npm run test
```
Isso vai executar todos os testes localizados na pasta /tests/unit.

### 2. Testes de Integração (Cypress)
Para rodar os testes de integração com Cypress, primeiro inicie o servidor (npm start), e em seguida, execute:

```bash
Copiar
Editar
npm run cypress
```
Isso abrirá a interface do Cypress para você rodar os testes de ponta a ponta, localizados em /tests/e2e.

***Scripts de Desenvolvimento***

Iniciar o servidor: 
``` bash
 npm start 
 ```

Rodar os testes unitários: 

```bash
npm run test
```

Rodar os testes Cypress: 
```bash
npm run cypress
```

Exemplos de Rotas
Cadastro de Aluno
Método: POST

Rota: /api/alunos

*** Exemplo de corpo da requisição: ***

```json
Copiar
Editar
{
  "nome": "João da Silva",
  "email": "joao@exemplo.com",
  "idade": 21
}

```
Cadastro de Professor
Método: POST

Rota: /api/professores

*** Exemplo de corpo da requisição: ***

```json
{
  "nome": "Maria Souza",
  "email": "maria@exemplo.com",
  "materia": "Matemática"
}
```
*** Estrutura de Banco de Dados ***
Tabelas
*** Alunos ***

```sql
CREATE TABLE alunos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    idade INT
); 
```
Professores

```sql
CREATE TABLE professores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    materia VARCHAR(100)
);
```

### Contribuindo
Se você quiser contribuir para o projeto, sinta-se à vontade para abrir uma pull request com melhorias ou correções de bugs. Certifique-se de que os testes estão passando antes de submeter.

### Passos para contribuir:
Fork o repositório.

Crie uma branch para sua feature (git checkout -b minha-feature).

Faça as modificações necessárias.

Adicione testes, se aplicável.

Envie as alterações para o seu fork (git push origin minha-feature).

Abra uma pull request.

### Licença
Este projeto está licenciado sob a MIT License.


### Explicação dos Passos:

1. **Instalação**: O projeto começa com a clonagem do repositório e a instalação das dependências com `npm install`.
   
2. **Banco de Dados**: A configuração do banco de dados é feita através do arquivo `.env`. O exemplo fornecido usa um banco MySQL, mas você pode adaptar para qualquer outro banco de dados relacional.

3. **Execução do Servidor**: Após a instalação e configuração, você pode iniciar o servidor da aplicação com `npm start`. O servidor estará disponível na porta 3000 por padrão.

4. **Testes Unitários**: O comando `npm run test` executa os testes unitários criados com Jest.

5. **Testes End-to-End**: O comando `npm run cypress` executa os testes end-to-end utilizando o Cypress. 

6. **Estrutura do Banco de Dados**: O exemplo contém as instruções para criar as tabelas de alunos e professores no banco de dados.
