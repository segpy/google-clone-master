// 'use strict';
/* ----- MOBILE AND TABLET SIDEBAR ----- */
const input = document.getElementById("search");
const button = document.getElementById("button");
const burger_btn = document.getElementById("burger_btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

burger_btn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar_open");
  overlay.classList.toggle("overlay_open");
});

overlay.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar_open");
  overlay.classList.toggle("overlay_open");
});

input.onchange = (event) => {
  event.preventDefault();
  const submit = event.target.value;
  const query = `http://www.google.com/search?hl=es&q=${submit}`;

  button.onclick = () => {
    console.log("Clickeando");
    window.open(query);
  };
};

input.addEventListener("keyup", (event) => {
  let key = event.keyCode || event.which;
  const submit = event.target.value;
  const query = `http://www.google.com/search?hl=es&q=${submit}`;

  if (key === 13) {
    window.open(query);
  }
});
