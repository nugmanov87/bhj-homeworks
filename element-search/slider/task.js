const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");

let slideNumber = 0;

const sliderImages = document.getElementsByClassName("slider__item");
let sliderImage = sliderImages.item(slideNumber);

nextButton.onclick = function() {
  if (slideNumber >= 0 && slideNumber < sliderImages.length - 1) {
    slideNumber++;
    sliderImage = sliderImages.item(slideNumber - 1);
    sliderImage.classList.remove("slider__item_active");
    sliderImage = sliderImages.item(slideNumber);
    sliderImage.classList.add("slider__item_active");
  } else {
    slideNumber = 0;
    sliderImage = sliderImages.item(slideNumber);
    sliderImage.classList.add("slider__item_active");
    for (let i = 1; i < 5; i++) {
      sliderImage = sliderImages.item(slideNumber + i);
      sliderImage.classList.remove("slider__item_active");
    }
  }
};

prevButton.onclick = function() {
  if (slideNumber < sliderImages.length && slideNumber > 0) {
    slideNumber--;
    sliderImage = sliderImages.item(slideNumber + 1);
    sliderImage.classList.remove("slider__item_active");
    sliderImage = sliderImages.item(slideNumber);
    sliderImage.classList.add("slider__item_active");
  } else {
    slideNumber = sliderImages.length - 1;
    sliderImage = sliderImages.item(0);
    sliderImage.classList.remove("slider__item_active");
    sliderImage = sliderImages.item(slideNumber);
    sliderImage.classList.add("slider__item_active");
  }
};
