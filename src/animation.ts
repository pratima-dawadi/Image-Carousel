import { Carousel } from "./carousel";

export class Animation {
  carousel: Carousel;
  intervalId: number | null;

  constructor(carousel: Carousel) {
    this.carousel = carousel;
    this.intervalId = null;
  }

  startAnimation(interval: number) {
    this.intervalId = window.setInterval(() => {
      this.carousel.removeActive();
      this.carousel.changeImage("right");
    }, interval);
  }

  stopAnimation() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
