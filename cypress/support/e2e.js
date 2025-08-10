import './commands';

before(() => {
  cy.log('🚀 Memulai test suite Cypress');
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'length')")) {
    return false;
  } else if (err.message.includes('showPicker')) {
    return false;
  } else if (err.message.includes('Request failed with status code 404')) {
    return false;
  }
});
