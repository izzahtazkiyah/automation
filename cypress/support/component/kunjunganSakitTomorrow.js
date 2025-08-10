const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const day = tomorrow.getDate();

export const KunjunganSakitTomorrow = ({ selector, practition, patient }) => {
  cy.get(selector.kunjungan.button.kunjungan).click();
  cy.get(selector.kunjungan.button.kunjunganSakit).click();
  cy.contains(selector.kunjungan.button.poli.umum).click();
  cy.get('#date').click();
  cy.get('.react-datepicker__day')
    .not('.react-datepicker__day--outside-month')
    .contains(new RegExp(`^${day}$`))
    .click();
  cy.get(selector.kunjungan.button.praktisi.jaga).click();
  cy.get(selector.kunjungan.button.praktisi.select).contains(practition.tm197).click();
  cy.contains(selector.kunjungan.button.add).click();
  cy.contains(selector.kunjungan.button.pasien.searchBy.nama).click();
  cy.get(selector.kunjungan.button.pasien.searchBy.select).contains(/nik/i).click();
  cy.contains(selector.kunjungan.button.pasien.search.id).click();
  cy.get(selector.kunjungan.button.pasien.search.select)
    .contains(patient.dev.lavender.patient1.nik)
    .click();
  cy.get(selector.kunjungan.button.pasien.jenisPembayaran.mandiri).click();
  cy.contains(selector.kunjungan.button.pasien.pembayaran.id).click();
  cy.get(selector.kunjungan.button.pasien.pembayaran.select).contains(/cash/i).click();
  cy.get(selector.kunjungan.button.pasien.submit.footer)
    .contains(
      selector.kunjungan.button.pasien.submit.type,
      selector.kunjungan.button.pasien.submit.placeholder
    )
    .click();
  cy.contains(selector.kunjungan.success).should('be.visible');
};
