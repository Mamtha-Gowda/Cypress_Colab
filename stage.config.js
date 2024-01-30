const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.google.com/',
    testIsolation: false,
    video:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  env: {
       username: "user1",
       password: "pwd1"
  },
  experimentalWebKitSupport: true
});
