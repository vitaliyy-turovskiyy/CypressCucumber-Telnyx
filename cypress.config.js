const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',
  //reporter: 'mochawesome',
  reporter:'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
       mochawesomeReporterOptions: {
          quite: 'true',
          overwrite: 'false',
          html: 'false',
          json: 'true',
          reportDir: 'cypress/reports/mocha'
        }
   },

  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     // implement node event listeners here
     const bundler = createBundler({
       plugins: [createEsBuildPlugin(config)],
      });

     on('file:preprocessor', bundler);
     await addCucumberPreprocessorPlugin(on, config);
     return config;
    },
specPattern: 'cypress/e2e/features/*.feature'
  },
});
