const {defineConfig} = require('cypress')

module.exports = defineConfig({
    viewportWidth: 1440,
    viewportHeight: 900,
    pageLoadTimeout: 20000,
    defaultCommandTimeout: 20000,
    reporter: 'cypress-mochawesome-reporter',
    chromeWebSecurity: false,

    reporterOptions: {
        embeddedScreenshots: true,
        inlineAssets: true,
    },

    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        retries: 2,
        setupNodeEvents(on) {
            require('cypress-mochawesome-reporter/plugin')(on)
        },
    },
})
