import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visit, pelayanan } from '../pom/pelayanan/pelayananUmumBesok';

Given(
  'User membuka halaman Pelayanan pada kunjungan umum dengan pembayaran cash untuk besok',
  () => {
    visit.main();
  }
);

When('User mengisi data Pelayanan pada kunjungan umum dengan pembayaran cash untuk besok', () => {
  pelayanan.umum();
});

Then(
  'Sistem menampilkan pesan berhasil menambahkan Pelayanan pada kunjungan umum dengan pembayaran cash untuk besok',
  () => {}
);
