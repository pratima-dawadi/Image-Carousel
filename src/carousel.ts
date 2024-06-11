export class Carousel {
  carousel: HTMLElement;
  indicators: NodeListOf<HTMLElement>;
  imageWidth: number;
  previousPosition: number;
  currentIndex: number;

  constructor(
    carousel: HTMLElement,
    indicators: NodeListOf<HTMLElement>,
    imageWidth: number
  ) {
    this.carousel = carousel;
    this.indicators = indicators;
    this.imageWidth = imageWidth;
    this.previousPosition = 0;
    this.currentIndex = 0;
  }

  //Adding the active class to the current indicator
  addActive() {
    this.indicators[this.currentIndex].classList.add("active");
  }

  //Resetting the indicators
  removeActive() {
    this.indicators.forEach((indicator) =>
      indicator.classList.remove("active")
    );
  }

  //Moving or shifting the carousel
  moveCarousel(index: number) {
    const shift = index * this.imageWidth;
    this.carousel.animate(
      [{ left: `-${this.previousPosition}px` }, { left: `-${shift}px` }],
      {
        duration: 500,
      }
    );
    this.carousel.style.left = `-${shift}px`;
    this.previousPosition = shift;
  }

  //Changing the image based on the direction
  changeImage(direction: string) {
    if (direction == "left") {
      this.currentIndex--;
    } else {
      this.currentIndex++;
    }
    if (this.currentIndex < 0) {
      this.currentIndex = this.indicators.length - 1;
    }
    if (this.currentIndex > this.indicators.length - 1) {
      this.currentIndex = 0;
    }

    this.moveCarousel(this.currentIndex);
    this.addActive();
  }
}
