const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const userNameH1 = document.querySelector('h1');

const HIDDEN_CLASSNAME = 'hidden';
const USER_KEY = 'User';

let greeting = function() {
  const username = window.localStorage.getItem(USER_KEY);
  userNameH1.innerText =`Hello, ${username}`;
  userNameH1.classList.remove(HIDDEN_CLASSNAME);
}

let onLoginSubmit = function(info) {
  info.preventDefault();

  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting();
  window.localStorage.setItem(USER_KEY, username);
}

const savedUsername = window.localStorage.getItem(USER_KEY);

if(savedUsername === null ) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  greeting();
}

// loginButton.addEventListener('click', function() {
//   // const value = loginInput.value;
//   // if(value === "") {
//   //   alert('Please write your name!');
//   // } else if (value.length > 12) {
//   //   alert('Too long your name!');
//   // }
//   // console.log('Hello', loginInput.value);
//   // loginInput.value = "";
// });