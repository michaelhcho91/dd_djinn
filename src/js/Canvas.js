import { getGifSrcUrl } from '../resources/getMedia.js';
import djinnData from '../resources/djinnData.json';
import DjinniGif from './DjinniGif.js';

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

export const initializeCanvas = (height = null) => {
  const canvas = document.getElementById('canvas');

  if (canvas) {
    canvas.width = CANVAS_WIDTH;
    canvas.height = height || CANVAS_HEIGHT;
    const context = canvas.getContext('2d');
  
    const animate = () => {
      requestAnimationFrame(animate);

      for (let i = 0; i < djinnArray.length; i++) {
        djinnArray[i].update();
      }
    };

    const djinnArray = [];

    const element = window.location.hash.slice(2);
    let djinnToRender = [];
    if (element) djinnToRender = djinnData[element].djinn;
    if (djinnToRender.length) {
      for (let i = 0; i < djinnToRender.length; i++) {
        const djinni = djinnToRender[i];
        const x = Math.random() * (canvas.width);
        const y = Math.random() * (canvas.height);
        const dx = Math.random() - 0.5;
        const dy = Math.random() - 0.5;
  
        const gif = new Image();
        gif.src = getGifSrcUrl(djinni.name);
        gif.onload = () => {
          djinnArray.push(new DjinniGif(x, y, dx, dy, gif, context, canvas));
        };
      }
    }

    animate();
  }
};