const form = document.querySelector(".email-form");
const msg = document.querySelector(".errorMsg");
const email = document.querySelector(".email");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
const confirm = document.querySelector(".confirm-email");
const dismiss = document.querySelector(".dismiss");

function errorMessage(message) {
  msg.innerText = message;
  msg.style.color = "hsl(4, 100%, 67%)";
  email.style.borderColor = "hsl(4, 100%, 67%)";
  email.style.backgroundColor = "hsl(4, 70%, 91%)";
  email.style.color = "hsl(4, 100%, 67%)";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "" || email.value == null) {
    errorMessage("Please insert email");
  } else if (!email.value.match(/(\w+.+)@+\w+\.+\w{2,}/g)) {
    errorMessage("Valid email required");
  } else {
    confirm.innerText = email.value;
    container.style.display = "none";
    success.style.display = "block";
  }
});

form.addEventListener("click", () => {
  msg.innerText = "";
  email.style.borderColor = "grey";
  email.style.backgroundColor = "white";
  email.style.color = "black";
});

dismiss.addEventListener("click", function () {
  email.value = "";
  success.style.display = "none";
  container.style.display = "flex";
});
