const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const featuresContenet = document.querySelector(".features .content");
const eachCardWidth = document.querySelector(
  ".features .content .card"
).clientWidth;
const eachCardleft = document.querySelector(".features .content .card");
console.log(featuresContenet.clientWidth);
let count = 30;

leftArrow.addEventListener("click", () => {
  count += 200;

  featuresContenet.style.transform = `translateX(-${eachCardWidth + count}px)`;
});
rightArrow.addEventListener("click", () => {
  count -= 150;

  console.log(featuresContenet.style.transform);
  featuresContenet.style.transform = `translateX(${eachCardWidth - count}px)`;
});
