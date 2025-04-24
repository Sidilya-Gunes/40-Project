const imgsContainer = document.getElementById("images");
const img = document.querySelectorAll("#images img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let interval = setInterval(play, 2000);
let idx = 0;

function play() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgsContainer.style.transform = `translateX(${-idx * 600}px)`;
}

prevBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(play, 2000);
}
