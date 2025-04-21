let draggedItem = null;

const fills = document.querySelectorAll(".fill");
const empties = document.querySelectorAll(".empty");

fills.forEach((fill) => {
  fill.addEventListener("dragstart", dragStart);
  fill.addEventListener("dragend", dragEnd);
});

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  draggedItem = this;
  setTimeout(() => {
    this.style.opacity = "0.5";
  }, 0);
}

function dragEnd() {
  this.style.opacity = "1";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hover");
}

function dragLeave() {
  this.classList.remove("hover");
}
function dragDrop() {
  this.classList.remove("hover");

  const oldFill = this.querySelector(".fill");
  if (oldFill) {
    oldFill.remove();
  }

  this.appendChild(draggedItem)
}
