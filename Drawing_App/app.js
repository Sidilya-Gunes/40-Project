const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const colorInput = document.getElementById("color");
const eraserBtn = document.getElementById("eraser");
const penBtn = document.getElementById("pen");
const undoBtn = document.getElementById("undo");
const sizeRange = document.getElementById("size");

let size = 8;
let color = "black";
let x;
let y;
let isPressed = false;
let isEraser = false;
let actions = [];

function drawCircle(x, y,clr=color,sz=size) {
  ctx.beginPath();
  ctx.arc(x, y, sz, 0, Math.PI * 2);
  ctx.fillStyle = clr;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2,clr=color,sz=size) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = clr;
  ctx.lineWidth = sz * 2;
  ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    actions.push({
      x1: x,
      y1: y,
      x2,
      y2,
      color,
      size,
      type:"draw"
    });
    x = x2;
    y = y2;
  }
});

colorInput.addEventListener("change", (e) => (color = e.target.value));

increaseBtn.addEventListener("click", () => {
  size += 2;

  if (size > 48) {
    size = 48;
  }
  updateSizeOnScreen();
});

function updateSizeOnScreen() {
  sizeRange.innerText = size;
}

decreaseBtn.addEventListener("click", () => {
  size -= 2;

  if (size < 4) {
    size = 4;
  }

  updateSizeOnScreen();
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

eraserBtn.addEventListener("click", () => {
  isEraser = true;
  color = "white";
});

penBtn.addEventListener("click", () => {
  isEraser = false;
  color = colorInput.value;
});

undoBtn.addEventListener("click", () => {
  actions.pop();
  redraw();
});

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  actions.forEach((action) => {
    ctx.strokeStyle = action.color;
    ctx.lineWidth = action.size * 2;
    drawCircle(action.x2, action.y2, action.color, action.size);
    drawLine(action.x1, action.y1, action.x2, action.y2);
  });
}
