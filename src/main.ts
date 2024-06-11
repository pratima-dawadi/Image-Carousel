import { Carousel } from "./carousel";
import { EventHandler } from "./eventHandler";
import { Animation } from "./animation";

const carousel = document.querySelector(".image-wrapper") as HTMLElement;
const leftArrow = document.querySelector(".fa-chevron-left") as HTMLElement;
const rightArrow = document.querySelector(".fa-chevron-right") as HTMLElement;
const indicators = document.querySelectorAll(
  ".indicator"
) as NodeListOf<HTMLElement>;

const image = document.querySelector(".image-wrapper") as HTMLElement;
const imageWidth = image.clientWidth;
console.log(imageWidth);

const imageCarousel = new Carousel(carousel, indicators, imageWidth);
const animation = new Animation(imageCarousel);
const eventHandler = new EventHandler(imageCarousel, animation);

eventHandler.EventListeners(leftArrow, rightArrow, indicators);

let isButtonClicked = false;

leftArrow.addEventListener("click", () => {
  isButtonClicked = true;
});

rightArrow.addEventListener("click", () => {
  isButtonClicked = true;
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    isButtonClicked = true;
  });
});

if (!isButtonClicked) {
  animation.startAnimation(2000);
}
