import selector from '../selector.json';
import account from '../../../fixtures/account.json';
import practition from '../../../fixtures/practition.json';
import patient from '../../../fixtures/patient.json';
import { Login } from '../../component/login';
import { KunjunganSakitTomorrow } from '../../component/kunjunganSakitTomorrow';

export const visit = {
  main: () => {
    cy.visit('/');
  },
};

export const kunjungan = {
  sakit: () => {
    Login({ selector, account: account });
    KunjunganSakitTomorrow({ selector, practition, patient });
  },
};
