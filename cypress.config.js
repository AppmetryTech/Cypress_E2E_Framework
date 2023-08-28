const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions:
  {
    reportDir: "cypress/results",
    overwrite: false,
    html: true,
    json: true

  },
  e2e: {
    baseUrl: "https://demo.opencart.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true
  },

});

/*
browsers: [
{
name: 'chrome',
family: 'chromium',
channel: 'stable',
displayName: 'Chrome',
version: '116.0.5845.111',
path: 'C:\Program Files\Google\Chrome\Application\chrome.exe',
minSupportedVersion: 64,
majorVersion: '116',
},
{
name: 'firefox',
family: 'firefox',
channel: 'stable',
displayName: 'Firefox',
version: '116.0.3',
path: 'C:\Program Files\Mozilla Firefox\firefox.exe',
minSupportedVersion: 86,
majorVersion: '116',
},
{
name: 'edge',
family: 'chromium',
channel: 'stable',
displayName: 'Edge',
version: '116.0.1938.62',
path: 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
minSupportedVersion: 79,
majorVersion: '116',
},
{
name: 'electron',
channel: 'stable',
family: 'chromium',
displayName: 'Electron',
version: '106.0.5249.51',
path: '',
majorVersion: 106,
},
],
chromeWebSecurity: true,
clientCertificates: [],
*/
