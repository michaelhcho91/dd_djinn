/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../js/Header';

const renderHeader = () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
};

it('renders without crashing', () => {
  renderHeader();
});

it('renders the header images', () => {
  renderHeader();
  expect(screen.getByAltText('dark_dawn_logo', { exact: true })).toBeDefined();
  expect(screen.getByAltText('golden_sun_icon', { exact: true })).toBeDefined();
});