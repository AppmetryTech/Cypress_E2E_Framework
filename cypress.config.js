const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "viewportHeight": 1080,
  "viewportWidth": 1920,
  screenshotsFolder: "cypress/reports/mochareports/assets",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true
    }
  },
  e2e: {
    baseUrl: "https://demo.nopcommerce.com/",

    /*  specPattern: [
        "cypress/e2e/Registration/01_register_success.cy.js",
        "cypress/e2e/Login/01_login_sucess.cy.js"
      ],*/
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    experimentalStudio: true
  },

  "env": {
    "apiUrl": "https://dummy.restapiexample.com/api/v1",
    // "uiUrl": ""
  }

});

