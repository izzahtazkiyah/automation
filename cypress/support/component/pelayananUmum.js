const today = new Date();

const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

const formattedDate = `${year}-${month}-${day}`;

export const PelayananUmum = ({ selector, practition, patient }) => {
  cy.get(selector.pelayanan.button.pelayanan).click();
  cy.get(selector.pelayanan.button.rekamMedis).click();
  cy.get('input[name="tanggal"]').clear().type(formattedDate).should('have.value', formattedDate);
  cy.get('#search').click().clear().type(patient.dev.lavender.patient1.name);
  cy.wait(2500);
  cy.contains('Pilih').click();
  cy.wait(2500);
  cy.contains('Tambah Rekam Medis').click();
  cy.wait(500);
  cy.get('body').then(($body) => {
    if ($body.text().includes('Rekam medis untuk antrian ini telah dibuat sebelumnya')) {
      cy.contains('Tampil detil').click();
      cy.contains('Lihat Rekam Medis').click();
    } else {
      cy.contains('Ya').click();
    }
  });
  cy.wait(2500);
  cy.get('#anamnesis').click().clear().type('Flu dan batuk');
  cy.get('#keluhan_utama').click().clear().type('Flu dan batuk');
  cy.scrollTo('bottom', { duration: 2000 });
  cy.contains('Simpan & Lanjutkan').click();
  cy.wait(2500);
  cy.get('body').then(($body) => {
    if ($body.text().includes('Pilih Kesadaran')) {
      cy.get('.react-select__option').contains('Compos Mentis').click();
      cy.get('#temperatur').click().clear().type('36');
      cy.get('#berat_badan').click().clear().type('60');
      cy.get('#tinggi_badan').click().clear().type('170');
      cy.get('#lingkar_perut').click().clear().type('29');
      cy.get('#sistole').click().clear().type('120');
      cy.get('#diastole').click().clear().type('80');
      cy.get('#respiratory_rate').click().clear().type('20');
      cy.get('#heart_rate').click().clear().type('80');
      cy.scrollTo('bottom', { duration: 2000 });
      cy.contains('Simpan & Lanjutkan').click();
    } else {
      cy.scrollTo('bottom', { duration: 2000 });
      cy.contains('Simpan & Lanjutkan').click();
    }
  });
  cy.wait(2500);
  cy.get('body').then(($body) => {
    if ($body.text().includes('Select...')) {
      cy.get('.react-select__option').contains('[A00] - Cholera').click();
      cy.scrollTo('bottom', { duration: 2000 });
      cy.contains('Simpan & Lanjutkan').click();
    } else {
      cy.scrollTo('bottom', { duration: 2000 });
      cy.contains('Simpan & Lanjutkan').click();
    }
  });
  cy.wait(2500);
  cy.contains('label', 'Prognosa').parent().find('.react-select__value-container').click();
  cy.get('.react-select__option').contains('Sanam (Sembuh)').click();
  cy.contains('label', 'Status Pulang').parent().find('.react-select__value-container').click();
  cy.get('.react-select__option').contains('Sembuh').click();
  cy.contains('Edukasi').click();
  cy.get('#edukasi').click().clear().type('Edukasi: Tolong diminum obatnya dengan baik dan benar');
  cy.contains('Edukasi').click();
  // cy.contains('Obat Racikan').click();
  // cy.contains('Klik tombol Tambah untuk menambahkan resep').click();
  // cy.contains('label', 'Pilih Obat').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains('Vemil 80 mg Rama tab').click();
  // cy.get('#jumlah').click().clear().type('10');
  // cy.contains('label', 'Jumlah').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains('Pcs').click();
  // cy.get('#frekuensi').click().clear().type('1');
  // cy.contains('label', 'Frekuensi').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains('Hari').click();
  // cy.contains('label', 'Aturan Pakai').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains('Setelah makan').click();
  // cy.contains('label', 'Metode Konsumsi').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains('Ditelan').click();
  // cy.get('textarea[name="catatan"]')
  //   .click()
  //   .clear()
  //   .type('Tolong obatnya diminum sesuai aturan ya');
  // cy.contains("Obat Racikan").click()
  // cy.contains("Klik tombol Tambah untuk menambahkan resep").click()
  // cy.get('#nama').click().clear().type('Obat Racikan Puyer OR001');
  // cy.contains('label', 'Jenis Racikan').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains("Puyer").click();
  // cy.get('#dosis').click().clear().type('1');
  // cy.contains('label', 'Jumlah').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains("Pcs").click();
  // cy.contains('Bahan Habis Pakai (BHP)').click();
  // cy.contains('Klik tombol Tambah untuk menambahkan bhp').click();
  // cy.contains('label', 'BHP #1').parent().find('.react-select__value-container').click();
  // cy.get('.react-select__option').contains('BHP 1').click();
  cy.scrollTo('bottom', { duration: 2000 });
  cy.get('button').contains('Selesai').click();
  cy.wait(1000);
  cy.contains('button.swal2-confirm', 'Selesai').click();
};
