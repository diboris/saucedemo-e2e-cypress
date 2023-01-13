import faker from 'faker'

describe('Login flow', () => {

    beforeEach(() => {
        cy.fixture('loginCredentials.json').as('loginCredentials')
    })

    it('A user can login', () => {
        cy.get('@loginCredentials').then(loginCredentials => {
            const usernames = [loginCredentials.standardUserEmail, loginCredentials.problemUserEmail, loginCredentials.performanceGlitchUserEmail]
            for (let i = 0; i < usernames.length; i++) {
                let username = usernames[i]
                cy.login(username, loginCredentials.password)
                cy.url().should('include', '/inventory.html')
            }
        })
    })

    it('A user can logout', () => {
        cy.get('@loginCredentials').then(loginCredentials => {
            cy.login(loginCredentials.standardUserEmail, loginCredentials.password)
        })

        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get('input[data-test="login-button"]').should('be.visible')
    })

    it('A locked out user can not login', () => {
        cy.get('@loginCredentials').then(loginCredentials => {
            cy.login(loginCredentials.lockedOutUserEmail, loginCredentials.password)
        })

        cy.assertError('Epic sadface: Sorry, this user has been locked out.')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('A user can not login with empty credentials', () => {
        cy.login()

        cy.assertError('Username is required')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('A user can not login without password', () => {
        const username = faker.internet.userName()
        cy.login(username)

        cy.assertError('Password is required')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('A user can not login with invalid password', () => {
        cy.get('@loginCredentials').then(loginCredentials => {
            const password = faker.internet.password()
            cy.login(loginCredentials.standardUserEmail, password)
        })

        cy.assertError('Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})
