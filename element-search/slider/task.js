"use srtict";
const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");

let slideNumber = 0;

const sliderImages = document.getElementsByClassName("slider__item");
let sliderImage = sliderImages.item(slideNumber);

function showSlides(n) {
  sliderImage = sliderImages.item(slideNumber + n);
  sliderImage.classList.remove("slider__item_active");
  sliderImage = sliderImages.item(slideNumber);
  sliderImage.classList.add("slider__item_active");
}

nextButton.onclick = function() {
  if (slideNumber >= 0 && slideNumber < sliderImages.length - 1) {
    slideNumber++;
    showSlides(-1);
  } else {
    slideNumber = 0;
    sliderImage.classList.remove("slider__item_active");
  }
};

prevButton.onclick = function() {
  if (slideNumber < sliderImages.length && slideNumber > 0) {
    slideNumber--;
    showSlides(1);
  } else {
    slideNumber = sliderImages.length - 1;
    sliderImage = sliderImages.item(0);
    showSlides();
  }
};
