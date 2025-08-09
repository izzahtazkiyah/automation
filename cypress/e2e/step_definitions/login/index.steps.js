import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { visit, login } from '../../../POM/login/page';

Given('User membuka halaman Login Page', () => {
  visit.main();
});
When('User mengisi Klinik ID, Username, dan Password yang valid', () => {
  login.validLogin();
});
Then('Sistem menampilkan pesan berhasil dan diarahkan ke halaman Dashboard', () => {});
