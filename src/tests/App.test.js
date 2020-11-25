/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
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

it('renders the header images', () => {
  renderApp();
  expect(screen.getByAltText('dark_dawn_logo', { exact: true })).toBeDefined();
  expect(screen.getByAltText('golden_sun_icon', { exact: true })).toBeDefined();
});