import { getGifSrcUrl } from '../resources/getMedia.js';
import djinn from '../resources/djinn.json';
import DjinniGif from './DjinniGif.js';

export const canvasHeight = window.innerHeight;
export const canvasWidth = window.innerWidth;

export const initializeCanvas = () => {
  const canvas = document.getElementById('canvas');

  if (canvas) {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const context = canvas.getContext('2d');
  
    const animate = () => {
      requestAnimationFrame(animate);

      for (let i = 0; i < djinnArray.length; i++) {
        djinnArray[i].update();
      }
    };

    const djinnArray = [];
    const venusDjinn = djinn.venus.djinn;
    for (let i = 0; i < venusDjinn.length; i++) {
      const djinni = venusDjinn[i];
      const x = Math.random() * (canvasWidth);
      const y = Math.random() * (canvasHeight);
      const dx = Math.random() - 0.5;
      const dy = Math.random() - 0.5;

      const gif = new Image();
      gif.src = getGifSrcUrl(djinni.name);
      gif.onload = () => {
        djinnArray.push(new DjinniGif(x, y, dx, dy, gif, context));
      };
    }

    animate();
  }
};