Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    if (email) {
        cy.get('input[data-test="username"]').type(email)
    }
    if (password) {
        cy.get('input[data-test="password"]').type(password)
    }
    cy.get('input[data-test="login-button"]').click()
})

Cypress.Commands.add('getProductNameFromProductPage', () => {
    return cy.get('.inventory_item_description .inventory_item_name').eq(0)
})

Cypress.Commands.add('getProductPriceFromProductPage', () => {
    return cy.get('.inventory_item .inventory_item_price').eq(0)
})

Cypress.Commands.add('getProductPricesFromProductPage', () => {
    return cy.get('.inventory_item .inventory_item_price')
})

Cypress.Commands.add('addItemToCart', () => {
    cy.get('.inventory_item button').eq(0).click()
})

Cypress.Commands.add('getProductNameFromCartPage', () => {
    return cy.get('.cart_item .inventory_item_name')
})

Cypress.Commands.add('getProductPriceFromCartPage', () => {
    return cy.get('.cart_item .inventory_item_price')
})
