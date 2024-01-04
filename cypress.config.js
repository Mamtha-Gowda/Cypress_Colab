const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3euwpr",
  e2e: {
    baseUrl : 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
