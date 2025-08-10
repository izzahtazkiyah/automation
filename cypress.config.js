const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },

    specPattern: 'cypress/e2e/features/**/*.feature',
    stepDefinitions: 'cypress/support/step_definitions/**/*.{js,ts}',

    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://dev.medeva.tech',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
