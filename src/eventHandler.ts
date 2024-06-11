import { Carousel } from "./carousel";
import { Animation } from "./animation";

export class EventHandler {
  carousel: Carousel;
  animation: Animation;

  constructor(carousel: Carousel, animation: Animation) {
    this.carousel = carousel;
    this.animation = animation;
  }

  EventListeners(
    leftBtn: HTMLElement,
    rightBtn: HTMLElement,
    indicators: NodeListOf<HTMLElement>
  ) {
    const stopAnimation = () => {
      this.animation.stopAnimation();
    };

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        stopAnimation();
        this.carousel.removeActive();
        this.carousel.moveCarousel(index);
        indicators[index].classList.add("active");
      });
    });

    leftBtn.addEventListener("click", () => {
      stopAnimation();
      this.carousel.removeActive();
      this.carousel.changeImage("left");
    });

    rightBtn.addEventListener("click", () => {
      stopAnimation();
      this.carousel.removeActive();
      this.carousel.changeImage("right");
    });
  }
}
