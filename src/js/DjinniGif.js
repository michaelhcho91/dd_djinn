import { canvasWidth, canvasHeight } from './Canvas.js';

class DjinniGif {
  constructor(x, y, dx, dy, gif, context) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.gif = gif;
    this.context = context;
  }

  draw() {
    this.context.clearRect(this.x - this.dx, this.y - this.dy, this.gif.naturalWidth, this.gif.naturalHeight);
    this.context.drawImage(this.gif, this.x, this.y);
  }

  update() {
    if (this.x > canvasWidth || this.x < 0) {
      this.dx = -this.dx;
    }

    if (this.y > canvasHeight || this.y < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (this.dx < 0) {
      this.gif.className = 'going-left';
    } else {
      this.gif.className = '';
    }

    this.draw();
  }
}

export default DjinniGif;