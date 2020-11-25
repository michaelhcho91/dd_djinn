/* eslint-disable no-undef */
import { getGifSrcUrl, getEntrySrcUrl, getImageSrcUrl } from '../resources/getMedia.js';

it('gets the gif src url in the correct format', () => {
  const string = 'test';
  const url = getGifSrcUrl(string);
  expect(url).toContain(string);
  expect(url).toContain(process.env.PUBLIC_URL);
  expect(url).toMatch('.gif');
});

it('gets the entry src url in the correct format', () => {
  const string = 'test';
  const url = getEntrySrcUrl(string);
  expect(url).toContain(string);
  expect(url).toContain(process.env.PUBLIC_URL);
  expect(url).toMatch('_entry.png');
});

it('gets the image src url in the correct format', () => {
  const string = 'test';
  const url = getImageSrcUrl(string);
  expect(url).toContain(string);
  expect(url).toContain(process.env.PUBLIC_URL);
  expect(url).toMatch('.png');
});