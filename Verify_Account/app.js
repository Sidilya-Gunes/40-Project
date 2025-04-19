const codes = document.querySelectorAll(".code");
const container = document.querySelector(".container");

let countDown = 30;
let timer;
const correctCode = "123456";

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => {
        if (codes[idx + 1]) {
          codes[idx + 1].focus();
        }
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        if (codes[idx - 1]) {
          codes[idx - 1].focus();
        }
      }, 10);
    }
    setTimeout(checkCode, 50);
  });
});

function checkCode() {
  const enteredCode = Array.from(codes)
    .map((input) => input.value)
    .join("");

  if (enteredCode.length === codes.length) {
    if (enteredCode === correctCode) {
      showMessage("✅ Kod doğrulandı!", "green");
      clearInterval(timer);
    } else {
      showMessage("❌ Hatalı kod girdiniz.", "red");
    }
  }
}

function showMessage(message, color) {
  const oldMsg = document.querySelector(".message");
  if (oldMsg) {
    oldMsg.remove();
  }

  const msg = document.createElement("p");
  msg.textContent = message;
  msg.classList.add("message");
  msg.style.color = color;
  msg.style.fontWeight = "bold";
  msg.style.marginTop = "20px";
  container.appendChild(msg);
}

function startTimer() {
  const timerElement = document.createElement("p");
  timerElement.classList.add("timer")
  timerElement.style.marginTop = "10px";
  timerElement.style.fontSize = ".9rem";
  timerElement.style.color = "#555";
  container.appendChild(timerElement);

  timer = setInterval(() => {
    timerElement.textContent = `Kalan süre : ${countDown} saniye `;

    if (countDown === 0) {
      clearInterval(timer);
      showMessage("⏰ Süre doldu! Lütfen tekrar deneyin.", "orange");
      codes.forEach((code) => (code.disabled = true));
    }
    countDown--;
  }, 1000);
}
startTimer();
