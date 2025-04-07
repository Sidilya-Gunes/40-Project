const container = document.querySelector(".container");
const imgCount = 9;

for (let i = 0; i < imgCount; i++) {
  const img = document.createElement("img");
  img.src = `https://picsum.photos/300?random=${Math.floor(
    Math.random() * 1000
  )}`;
  container.appendChild(img);
}
