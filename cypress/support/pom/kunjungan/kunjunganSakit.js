import selector from '../selector.json';
import account from '../../../fixtures/account.json';
import practition from '../../../fixtures/practition.json';
import patient from '../../../fixtures/patient.json';
import { Login } from '../../component/login';
import { KunjunganSakit } from '../../component/kunjunganSakit';

export const visit = {
  main: () => {
    cy.visit('/');
  },
};

export const kunjungan = {
  sakit: () => {
    Login({ selector, account: account });
    KunjunganSakit({ selector, practition, patient });
  },
};
