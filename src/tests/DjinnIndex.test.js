/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import DjinnIndex from '../js/DjinnIndex';

const renderDjinnIndex = (pathname = '') => {
  render(
    <DjinnIndex location={{ pathname }} />
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

it('returns undefined if there is no element', () => {
  expect(renderDjinnIndex()).toBeUndefined();
});