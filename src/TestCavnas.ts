class TestCanvas {
  private canvas = document.createElement("canvas");
  private ctx = this.canvas.getContext("2d")!;
  private width = 1;
  private height = 1;

  constructor(rootDom: HTMLElement) {
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      this.resizeCanvas(entry);
    });
    resizeObserver.observe(this.canvas, { box: "device-pixel-content-box" });
    rootDom.append(this.canvas);
  }

  resizeCanvas = (entry: ResizeObserverEntry) => {
    const ratio = 1;
    const contentWidth = entry.contentRect.width;
    const contentHeight = entry.contentRect.height;
    console.log("contentWidth =", contentWidth);
    console.log("contentWidth * ratio", contentWidth * ratio);
    console.log(
      "entry.devicePixelContentBoxSize[0].inlineSize",
      entry.devicePixelContentBoxSize[0].inlineSize
    );
    this.canvas.width = contentWidth * ratio;
    this.canvas.height = contentHeight * ratio;
    // this.canvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
    // this.canvas.height = entry.devicePixelContentBoxSize[0].blockSize;
    this.width = contentWidth || 1;
    this.height = contentHeight || 1;
    this.ctx.save();
    this.ctx.scale(ratio, ratio);
    this.drawAll();
  };

  drawAll = () => {
    const { ctx, width, height } = this;
    ctx.clearRect(0, 0, width, height);
    // ctx.beginPath();
    // ctx.moveTo(10.5, 10.5);
    // ctx.lineTo(10.5, height - 10.5);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.restore();
    // ctx.moveTo(100.5, 10.5);
    // ctx.lineTo(100.5, height - 10.5);
    // ctx.stroke();
    ctx.fillRect(30, 30, width - 60, height - 60);
  };
}

export default TestCanvas;
