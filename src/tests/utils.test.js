/* eslint-disable no-undef */
import { matchPathElement } from '../resources/utils.js';

it('matches the correct element', () => {
  const path = '/venus';
  const matched = matchPathElement(path);
  expect(matched).toMatch('venus');
});

it('returns undefined when there is no match', () => {
  const path = '/';
  const matched = matchPathElement(path);
  expect(matched).toBeUndefined();
});