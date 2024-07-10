const hamBtn = document.getElementById("ham-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
