# Cypress_E2E_Framework
This repository contains automated tests written using Cypress for testing the UI of your application. It includes scripts to clean, run, and generate reports for your tests.

## Prerequisites

- Node.js and npm installed on your machine.
- Chrome and Firefox browsers installed for running tests.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run the following command to install the project dependencies:

```sh
npm install
```

## FIRST RUN PRETEST
- To clean the old reports and prepare for testing, run the following command:

```sh
npm run pretest
- To run all the test scripts, use the following command:
```
```sh
npm run test
 - This will run the test scripts and generate comprehensive test reports.
```
## Additional Test Commands
 - Run tests in Chrome browser: npm run cy:run:chrome
 - Run tests in Firefox browser: npm run cy:run:firefox
 - Run specific registration test: npm run registration
 - Run tests in parallel: npm run cy:run:parallel

## Reporting
Test reports are generated using Mocha and Marge. You can find the generated reports in the cypress/reports/mochareports directory after running the tests.

## Notes
Make sure to configure your Cypress tests and directories as needed for your project.
Feel free to customize the scripts and configurations to suit your testing requirements.
## Happy testing!
