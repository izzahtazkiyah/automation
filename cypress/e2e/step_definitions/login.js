import { visit, login } from "../../POM/login/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User membuka halaman Login Page", () => {
  visit.visit();
});
When("User mengisi Klinik ID, Username, dan Password yang valid", () => {
  login.validLogin();
});
Then(
  "Sistem menampilkan pesan berhasil dan diarahkan ke halaman Dashboard",
  () => {}
);
