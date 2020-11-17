class DjinniGif {
  constructor(x, y, dx, dy, gif, context, canvas) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.gif = gif;
    this.context = context;
    this.canvas = canvas;
  }

  draw() {
    this.context.clearRect(this.x - this.dx, this.y - this.dy, this.gif.naturalWidth, this.gif.naturalHeight);
    this.context.drawImage(this.gif, this.x, this.y);
  }

  update() {
    if (this.x > this.canvas.width || this.x < 0) {
      this.dx = -this.dx;
    }

    if (this.y > this.canvas.height || this.y < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

export default DjinniGif;