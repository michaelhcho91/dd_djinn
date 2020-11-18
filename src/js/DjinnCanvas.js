import { getGifSrcUrl } from '../resources/getMedia.js';
import djinnData from '../resources/djinnData.json';
import DjinniGif from './DjinniGif.js';

class DjinnCanvas {
  constructor() {
    this.djinnArray = [];
    this.animate = this.animate.bind(this);
  }

  initialize(height = null, element = '') {
    this.djinnArray = [];
    const canvas = document.getElementById('canvas');

    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = height || window.innerHeight;
      const context = canvas.getContext('2d');

      let djinnToRender = [];
      if (element) {
        djinnToRender = djinnData[element].djinn;
      } else {
        Object.keys(djinnData).forEach(element => {
          const { djinn } = djinnData[element];
          let i = 0;
          while (i < 3) {
            const randomDjinni = djinn[Math.floor(Math.random() * djinn.length)];
            djinnToRender.push(randomDjinni);
            i++;
          }
        });
      }

      if (djinnToRender.length) {
        for (let i = 0; i < djinnToRender.length; i++) {
          const speed = (element) ? 1 : 0.5;
          const djinni = djinnToRender[i];
          const x = Math.random() * (canvas.width);
          const y = Math.random() * (canvas.height);
          const dx = Math.random() - speed;
          const dy = Math.random() - speed;

          const gif = new Image();
          gif.src = getGifSrcUrl(djinni.name);
          gif.onload = () => {
            this.djinnArray.push(new DjinniGif(x, y, dx, dy, gif, context, canvas));
          };
        }
      }
    }

    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.djinnArray.forEach(djinni => djinni.update());
  }
}

export default new DjinnCanvas;