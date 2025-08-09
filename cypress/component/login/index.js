export const Login = ({ selector, account }) => {
  cy.get(selector.kodeAuth).type(account.syamsudinNoor.klinikID);
  cy.get(selector.username).click().clear().type(account.syamsudinNoor.username);
  cy.get(selector.password).click().clear().type(account.passwordDev);
  cy.get(selector.loginButton).click();
  cy.get(selector.successLogin).should('be.visible');
};
