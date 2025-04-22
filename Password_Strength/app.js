const background = document.getElementById("background");
const passwordLabel = document.getElementById("passwordLabel");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const emailInput = document.getElementById("email");
const signupForm = document.getElementById("signupForm");
const submitBtn = document.querySelector("button[type='submit']");

passwordInput.addEventListener("input", (e) => {
  const length = e.target.value.length;

  const bgBlur = 20 - length * 2;
  background.style.filter = `blur(${bgBlur}px)`;

  if (length >= 10) {
    passwordLabel.innerText = "Strong Password";
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    message.innerText = "Please fill in all fields!";
    message.classList.remove("text-green-600 ");
    message.classList.add("text-red-600 ");
  } else {
    message.innerText = "Your account has been successfully created!";
    message.classList.remove("text-red-600");
    message.classList.remove("hidden");
    message.classList.add("text-green-600");

    emailInput.value = "";
    passwordInput.value = "";

    background.style.filter = `blur(20px)`;

    setTimeout(() => {
      message.innerText = "";
      message.classList.add(" hidden")
    }, 2000);
    console.log(message);
    
  }
});

emailInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    passwordInput.focus();
  }
});
