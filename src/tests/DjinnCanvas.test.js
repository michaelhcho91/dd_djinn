/* eslint-disable no-undef */
import DjinnCanvas from '../js/DjinnCanvas';

it('constructs with empty djinnArray', () => {
  expect(DjinnCanvas.djinnArray).toHaveLength(0);
});

it('finds the canvas', () => {
  DjinnCanvas.initialize();
  expect(DjinnCanvas.canvas).toBeDefined();
});

it('gets a delta less than -0.1 and greater than 0.1', () => {
  const delta = DjinnCanvas.getDelta();
  expect(delta < -0.1 || delta > 0.1).toBeTruthy();
});

it('resets itself', () => {
  DjinnCanvas.reset();
  expect(DjinnCanvas.canvas).toBeNull();
  expect(DjinnCanvas.context).toBeNull();
  expect(DjinnCanvas.djinnArray).toHaveLength(0);
});