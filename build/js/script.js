const hamburgerBtn = document.getElementById("hamburger");
const mobileMenu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("top-16");
  mobileMenu.classList.toggle("-top-96");
});
