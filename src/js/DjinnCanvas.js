import { getGifSrcUrl } from '../resources/getMedia.js';
import djinnData from '../resources/djinnData.json';
import DjinniGif from './DjinniGif.js';
// import { parseGIF, decompressFrames } from 'gifuct-js';

class DjinnCanvas {
  constructor() {
    this.djinnArray = [];
    this.animate = this.animate.bind(this);
  }

  reset() {
    this.canvas = null;
    this.context = null;
    this.djinnArray = [];
  }

  initialize(height = null, element = '') {
    this.canvas = document.getElementById('canvas');

    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = height || window.innerHeight;
      this.context = this.canvas.getContext('2d');

      let djinnToRender = [];
      if (element) {
        djinnToRender = djinnData[element].djinn;
      } else {
        Object.keys(djinnData).forEach(element => {
          const { djinn } = djinnData[element];
          const randomDjinni = djinn[Math.floor(Math.random() * djinn.length)];
          djinnToRender.push(randomDjinni);
        });
      }

      if (djinnToRender.length) {
        for (let i = 0; i < djinnToRender.length; i++) {
          const djinni = djinnToRender[i];
          this.setDjinni(djinni);
        }
      }
    }

    this.animate();
  }

  setDjinni(djinni) {
    const gif = new Image();
    gif.src = getGifSrcUrl(djinni.name);
    gif.onload = () => {
      const widthRadius = gif.naturalWidth / 2;
      const heightRadius = gif.naturalHeight / 2;

      const x = Math.random() * (this.canvas.width - widthRadius * 2) + widthRadius;
      const y = Math.random() * (this.canvas.height - heightRadius * 2) + heightRadius;
      const dx = this.getDelta();
      const dy = this.getDelta();

      this.djinnArray.push(new DjinniGif(x, y, dx, dy, gif, this.context, this.canvas));
    };
  }

  getDelta() {
    let delta = Math.random() - 0.5;

    while (delta > -0.1 && delta < 0.1) {
      delta = Math.random() - 0.5;
    }

    return delta;
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.djinnArray.forEach(djinni => djinni.update());
  }
}

export default new DjinnCanvas;