const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const day = String(tomorrow.getDate()).padStart(2, '0');
const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
const year = tomorrow.getFullYear();

const formattedDate = `${year}-${month}-${day}`;

export const PelayananUmumBesok = ({ selector, practition, patient }) => {
  cy.get(selector.pelayanan.button.pelayanan).click();
  cy.get(selector.pelayanan.button.rekamMedis).click();
  cy.get('input[name="tanggal"]').clear().type(formattedDate).should('have.value', formattedDate);
  cy.wait(10000);
};
