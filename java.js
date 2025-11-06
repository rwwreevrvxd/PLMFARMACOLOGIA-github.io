const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.querySelectorAll(".slide"));
let currentIndex = 0;
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");

function goToSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  currentIndex = index;
  slides.forEach((slide, i) => {
    slide.style.left = `${i - currentIndex}00%`;
  });
}

prevButton.addEventListener("click", () => goToSlide(currentIndex - 1));
nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    goToSlide(currentIndex - 1);
  } else if (event.key === "ArrowRight") {
    goToSlide(currentIndex + 1);
  }
});

goToSlide(0);

