describe('Filter flow', () => {

    beforeEach(() => {
        cy.fixture('loginCredentials.json').as('loginCredentials')
    })

    it('A user can filter product list by low to high price', () => {
        cy.get('@loginCredentials').then(loginCredentials => {
            cy.login(loginCredentials.standardUserEmail, loginCredentials.password)
        })

        cy.get('select[data-test="product_sort_container"]').select('lohi')

        cy.getProductPricesFromProductPage().then(value => {
            const pricesText = value.text()
            let actualPriceStrings = pricesText.split('$')
            actualPriceStrings.shift()
            const actualPrices = actualPriceStrings.map(x => Number(x))
            const expectedPrices = actualPrices.slice().sort((a, b) => a - b)

            expect(JSON.stringify(actualPrices)).to.equal(JSON.stringify(expectedPrices))
        })
    })
})
