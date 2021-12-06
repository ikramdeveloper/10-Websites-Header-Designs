const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const left = document.getElementById("left");
const right = document.getElementById("right");

let counter = 0;
const size = slides[0].offsetWidth;

carousel.insertAdjacentHTML("afterbegin", slides[slides.length - 1].outerHTML);
carousel.insertAdjacentHTML("beforeend", slides[0].outerHTML);
carousel.style.transform = `translateX(${-size * 1}px)`;

// carousel.style.transform = `translateX(${-size * counter}px)`;

right.addEventListener("click", () => {
  carousel.style.transition = "all 0.3s ease-in-out";
  counter++;
  let getSlide = counter;
  carousel.style.transform = `translateX(${-size * (counter + 1)}px)`;

  if (counter >= slides.length) {
    setTimeout(() => {
      counter = 0;
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(${-size}px)`;
    }, 300);
  }

  if (counter >= slides.length) getSlide = 0;
  changeBg(getSlide);
});

left.addEventListener("click", () => {
  carousel.style.transition = "all 0.3s ease-in-out";
  counter--;
  let getSlide = counter + slides.length;
  carousel.style.transform = `translateX(${-size * (counter + 1)}px)`;

  if (counter < 0) {
    setTimeout(() => {
      counter = slides.length - 1;
      carousel.style.transition = "none";
      //   updateCarouse();
      carousel.style.transform = `translateX(${-size * (counter + 1)}px)`;
    }, 300);
  }
  if (getSlide >= slides.length) getSlide = counter;
  changeBg(getSlide);
});

// function updateCarouse() {
//   carousel.style.transform = `translateX(${-size * (counter + 1)}px)`;
//   console.log(counter);
//   document.body.style.background = `#${slides[counter].getAttribute(
//     "data-bg"
//   )}`;
// }

function changeBg(getSlide) {
  document.body.style.background = `#${slides[getSlide].getAttribute(
    "data-bg"
  )}`;
}
