describe('Testar formulários de Aluno e Professor', () => {
  it('Deve preencher e submeter o formulário de Aluno', () => {
    cy.visit('/aluno/novo');
    cy.get('input[name="nome"]').type('João Silva');
    cy.get('input[name="email"]').type('joao@teste.com');
    cy.get('input[name="data_nascimento"]').type('2000-01-01');
    cy.get('form').submit();
    cy.url().should('include', '/aluno');
    cy.contains('Aluno cadastrado com sucesso');
  });

  it('Deve preencher e submeter o formulário de Professor', () => {
    cy.visit('/professor/novo');
    cy.get('input[name="nome"]').type('Maria Oliveira');
    cy.get('input[name="email"]').type('maria@teste.com');
    cy.get('input[name="especialidade"]').type('Matemática');
    cy.get('form').submit();
    cy.url().should('include', '/professor');
    cy.contains('Professor cadastrado com sucesso');
  });
});
