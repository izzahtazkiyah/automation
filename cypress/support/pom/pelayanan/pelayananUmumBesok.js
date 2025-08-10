import selector from '../selector.json';
import account from '../../../fixtures/account.json';
import practition from '../../../fixtures/practition.json';
import patient from '../../../fixtures/patient.json';
import { Login } from '../../component/login';
import { PelayananUmumBesok } from '../../component/pelayananUmumBesok';

export const visit = {
  main: () => {
    cy.visit('/');
  },
};

export const pelayanan = {
  umum: () => {
    Login({ selector, account });
    PelayananUmumBesok({ selector, practition, patient });
  },
};
