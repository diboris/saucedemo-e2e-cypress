Cypress.Commands.add('assertError', (msg) => {
   cy.get('h3[data-test="error"]').should('contain', msg)
})
