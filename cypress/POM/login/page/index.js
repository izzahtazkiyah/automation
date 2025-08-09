import selector from './selector.json';
import dataAccount from '../../fixtures/account.json';
import { Login } from '../../../component/login';

export const visit = {
  main: () => {
    cy.visit('/');
  },
};

export const login = {
  validLogin: () => {
    Login({ selector, account: dataAccount });
  },
};
