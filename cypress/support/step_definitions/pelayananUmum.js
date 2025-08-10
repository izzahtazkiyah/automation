import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visit, pelayanan } from '../pom/pelayanan/pelayananUmum';

Given('User membuka halaman Pelayanan pada kunjungan umum dengan pembayaran cash', () => {
  visit.main();
});

When('User mengisi data Pelayanan pada kunjungan umum dengan pembayaran cash', () => {
  pelayanan.umum();
});

Then(
  'Sistem menampilkan pesan berhasil menambahkan Pelayanan pada kunjungan umum dengan pembayaran cash',
  () => {}
);
