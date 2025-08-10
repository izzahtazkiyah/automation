export const Login = ({ selector, account }) => {
  cy.get(selector.login.kodeAuth).type(account.dev.syamsudinNoor.klinikID);
  cy.get(selector.login.username).click().clear().type(account.dev.syamsudinNoor.username);
  cy.get(selector.login.password).click().clear().type(account.dev.passwordDev);
  cy.get(selector.login.loginButton).click();
  cy.contains(selector.login.successLogin).should('be.visible');
};
