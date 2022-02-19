const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");

//String variables
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function paintGreeting(username) {
  let currentTime = "";
  const hours = new Date().getHours();
  if (hours >= 05 && hours < 12) {
    currentTime = "Good morning";
  } else if (hours >= 12 && hours < 19) {
    currentTime = "Good afternoon";
  } else if (hours >= 19 && hours < 23) {
    currentTime = "Good evening";
  } else {
    currentTime = "Good night";
  }
  greeting.innerText = `${currentTime}, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function saveUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

function submitLogin(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  saveUsername(username);
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", submitLogin);
} else {
  paintGreeting(savedUsername);
  setInterval(paintGreeting(savedUsername), 3600000);
}
