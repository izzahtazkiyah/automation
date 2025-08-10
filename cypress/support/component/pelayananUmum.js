export const PelayananUmum = ({ selector, practition, patient }) => {
  cy.get(selector.pelayanan.button.pelayanan).click();
  cy.get(selector.pelayanan.button.rekamMedis).click();
};
