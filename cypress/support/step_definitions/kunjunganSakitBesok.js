import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visit, kunjungan } from '../pom/kunjungan/kunjunganSakitBesok';

Given('User membuka halaman Kunjungan untuk besok', () => {
  visit.main();
});

When('User mengisi data Kunjungan untuk besok', () => {
  kunjungan.sakit();
});

Then('Sistem menampilkan pesan berhasil menambahkan Kunjungan untuk besok', () => {});
