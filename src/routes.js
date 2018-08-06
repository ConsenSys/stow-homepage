import LinniaLogo from './images/LinniaLogo';
import React from 'react';

const height = 35;
const width = 35;

export const homeRoute = {
  title: <LinniaLogo style={{ height, width }} />,
  key: 'home'
};

export const gettingStartedRoute = {
  title: 'Getting Started',
  key: 'getting-started'
};

export const forDevelopersRoute = {
  title: 'Developers',
  key: 'for-developers'
};

export const forUsersRoute = {
  title: 'Users',
  key: 'for-users'
};

export const forPartnersRoute = {
  title: 'Partners',
  key: 'for-partners'
};

export const aboutUsRoute = {
  title: 'About Us',
  key: 'about-us'
}

const routes = [
  homeRoute,
  gettingStartedRoute,
  forDevelopersRoute,
  forUsersRoute,
  forPartnersRoute,
  aboutUsRoute,
];

export default routes;