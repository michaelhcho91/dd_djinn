import { getGifSrcUrl } from '../resources/getMedia';

export const initializeCanvas = () => {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = 80;
  const context = canvas.getContext('2d');
};