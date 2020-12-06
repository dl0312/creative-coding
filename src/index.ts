class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pixelRatio: number;

  stageWidth: number;
  stageHeight: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d")!;

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    /** resize */
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.ctx.fillStyle = "#f0d785";
    this.ctx.beginPath();
    this.ctx.arc(
      this.stageWidth / 2,
      this.stageHeight / 2,
      300,
      0,
      2 * Math.PI
    );
    this.ctx.fill();
  }
}

new App();
