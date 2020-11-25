/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from '../js/Home';

const renderHome = () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

it('renders without crashing', () => {
  renderHome();
});

it('renders the splash image', () => {
  renderHome();
  expect(screen.getByAltText('splash', { exact: true })).toBeDefined();
});

it('renders the canvas', () => {
  renderHome();
  expect(document.getElementById('canvas')).toBeDefined();
});

it('renders navigation links', () => {
  renderHome();
  expect(document.getElementsByClassName('nav-links')[0]).toBeDefined();
});