import selector from "./selector.json";
import dataAccount from "../../fixtures/account.json";

export const visit = {
  visit: () => {
    cy.visit("/");
  },
};

export const login = {
  validLogin: () => {
    cy.get(selector.kodeAuth).type(dataAccount.syamsudinNoor.klinikID);
    cy.get(selector.username)
      .click()
      .clear()
      .type(dataAccount.syamsudinNoor.username);
    cy.get(selector.password).click().clear().type(dataAccount.passwordDev);
    cy.get(selector.loginButton).click();
    cy.get(selector.successLogin).should("be.visible");
  },
};
