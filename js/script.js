let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let rightBar = document.querySelector(".right-bar");

// menu.addEventListener(onclick, (event) => {
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  rightBar.classList.toggle("open");
};
// });
