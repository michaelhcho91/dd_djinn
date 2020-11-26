/* eslint-disable no-undef */
import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import DjinniCard from '../js/DjinniCard';

const renderDjinniCard = (djinni = {}) => {
  render(
    <DjinniCard djinni={djinni} />
  );
};

it('renders without crashing', () => {
  renderDjinniCard();
});

it('renders correctly with a valid djinni', () => {
  const validDjinni = { id: 1, name: 'valid', description: 'valid djinni', effect: 'has effect' };
  renderDjinniCard(validDjinni);
  expect(screen.getByText('valid djinni')).toBeDefined();
});

it('returns undefined if given invalid djinni', () => {
  const invalidDjinni = { id: null, name: 'invalid', description: 'invalid djinni', effect: 'no effect' };
  renderDjinniCard(invalidDjinni);
  expect(document.getElementsByClassName('djinni-card-container')[0]).toBeUndefined();
});