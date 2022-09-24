let menu = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");
let headerofpage = document.querySelector(".header");
let innerheader = document.querySelector(".navbar_nav");
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
});
overlay.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
});
let previousYPosition = window.scrollY;
window.addEventListener("scroll", () => {
  let currenYPosition = window.scrollY;
  menu.classList.remove("is-active");
  sidebar.classList.remove("active");
  overlay.classList.remove("show");
  if (currenYPosition > previousYPosition) {
    headerofpage.classList.remove("header_show");
    innerheader.classList.remove("navbar_nav_show");
  } else {
    headerofpage.classList.add("header_show");
    innerheader.classList.add("navbar_nav_show");
  }
  if (currenYPosition > window.innerHeight) {
    headerofpage.classList.add("header_background");
  } else if (currenYPosition < window.innerHeight) {
    headerofpage.classList.remove("header_background");
  }
  previousYPosition = currenYPosition;
});
