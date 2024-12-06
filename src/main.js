const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("nav-menu");

const closmenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

closmenu.addEventListener("click", () => {
  menu.classList.add("hidden");
});
