const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  hamburger.classList.toggle("open");

  const spans = hamburger.querySelectorAll("span");
  spans[0].classList.toggle("rotate-45");
  spans[0].classList.toggle("translate-y-2");

  spans[1].classList.toggle("opacity-0");

  spans[2].classList.toggle("-rotate-45");
  spans[2].classList.toggle("-translate-y-2");
});
