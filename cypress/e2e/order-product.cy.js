const faker = require('faker')

describe('Order a product flow', () => {

    beforeEach(() => {
        cy.fixture('loginCredentials.json').as('loginCredentials')
    })

    it('A user can order a product', () => {
        cy.get('@loginCredentials').then(loginCredentials => {
            cy.login(loginCredentials.standardUserEmail, loginCredentials.password)
        })

        let productName
        cy.getProductNameFromProductPage().then(value => {
            productName = value.text()
        })

        let productPrice
        cy.getProductPriceFromProductPage().then(value => {
            productPrice = value.text()
        })

        cy.addItemToCart()
        cy.get('.shopping_cart_container').click()

        cy.get('.cart_quantity').should('have.text', '1')

        cy.getProductNameFromCartPage().then(value => {
            cy.wrap(value).should('have.text', productName)
        })

        cy.getProductPriceFromCartPage().then(value => {
            cy.wrap(value).should('have.text', productPrice)
        })

        cy.get('button[data-test="checkout"]').click()

        const firstName = faker.name.firstName()
        cy.get('input[data-test="firstName"]').type(firstName)

        const lastName = faker.name.lastName()
        cy.get('input[data-test="lastName"]').type(lastName)

        const postalCode = faker.address.zipCode()
        cy.get('input[data-test="postalCode"]').type(postalCode)

        cy.get('input[data-test="continue"]').click()

        cy.get('.cart_quantity').should('have.text', '1')

        cy.getProductNameFromCartPage().then(value => {
            cy.wrap(value).should('have.text', productName)
        })

        cy.getProductPriceFromCartPage().then(value => {
            cy.wrap(value).should('have.text', productPrice)
        })

        cy.get('button[data-test="finish"]').click()

        cy.get('h2').should('contain', 'THANK YOU FOR YOUR ORDER')
    })
})
