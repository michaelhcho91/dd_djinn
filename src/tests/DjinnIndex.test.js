/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DjinnIndex from '../js/DjinnIndex';

const renderDjinnIndex = (pathname = '') => {
  render(
    <MemoryRouter>
      <DjinnIndex location={{ pathname }} />
    </MemoryRouter>
  );
};

it('renders no element without crashing', () => {
  renderDjinnIndex();
});

it('renders an element without crashing', () => {
  renderDjinnIndex('/venus');
});

it('renders the canvas', () => {
  renderDjinnIndex();
  expect(document.getElementById('canvas')).toBeDefined();
});

it('returns null if there is no element', () => {
  renderDjinnIndex();
  expect(document.getElementById('djinn-index')).toBeNull();
});