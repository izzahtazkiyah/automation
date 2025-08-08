const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", // semua file .feature akan dibaca Cypress
    async setupNodeEvents(on, config) {
      await cucumber.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", webpack({}));
      return config;
    },
  },
});
