/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';

const renderApp = () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

it('renders without crashing', () => {
  renderApp();
});