import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visit, kunjungan } from '../pom/kunjungan/kunjunganSakit';

Given('User membuka halaman Kunjungan', () => {
  visit.main();
});

When('User mengisi data Kunjungan', () => {
  kunjungan.sakit();
});

Then('Sistem menampilkan pesan berhasil menambahkan Kunjungan', () => {});
