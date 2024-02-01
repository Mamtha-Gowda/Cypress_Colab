const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3euwpr",
  retries: {openMode:1, runMode:1},
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl : 'https://automationexercise.com/',
    testIsolation: false,
    video:true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
  experimentalWebKitSupport: true
});
