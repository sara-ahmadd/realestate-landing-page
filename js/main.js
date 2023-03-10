const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const featuresContenet = document.querySelector(".features .content");
const eachCardWidth = document.querySelector(
  ".features .content .card"
).clientWidth;

const eachCardleft = document.querySelector(".features .content .card");
const eachCard = document.querySelector(".features .content .card");

let count = 30;

leftArrow.addEventListener("click", () => {
  count += 200;
  if (eachCardWidth + count > 2000) {
    count = 30;
    featuresContenet.style.transform = `translateX(0)`;
  } else {
    featuresContenet.style.transform = `translateX(-${
      eachCardWidth + count
    }px)`;
  }
});
rightArrow.addEventListener("click", () => {
  count -= 100;
  if (eachCardWidth - count > 0) {
    featuresContenet.style.transform = `translateX(${0}px)`;
    count = 30;
  }
  featuresContenet.style.transform = `translateX(${eachCardWidth - count}px)`;
});
