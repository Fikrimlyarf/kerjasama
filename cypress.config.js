const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1536,
    viewportHeight: 864,
    chromeWebSecurity: false,
    watchForFileChanges: false,
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
