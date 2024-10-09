const menuline = document.getElementById("menuline");
const Navsmenu = document.getElementById("nav-menu");
const navclose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");

menuline.addEventListener("click", () => {
  Navsmenu.classList.remove("hidden");
});

navclose.addEventListener("click", () => {
  Navsmenu.classList.add("hidden");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    Navsmenu.classList.add("hidden");
  })
);
