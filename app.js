const hamBtn = document.getElementById("ham-btn");
const mobileMenu = document.getElementById("mobile-menu");
const productBtns = document.querySelectorAll(".product-btn");
const productLists = document.querySelectorAll(".product-list");
const companyBtns = document.querySelectorAll(".company-btn");
const companyList = document.querySelectorAll(".company-list");
const connectBtns = document.querySelectorAll(".connect-btn");
const connectList = document.querySelectorAll(".connect-list");

hamBtn.addEventListener("click", () => {
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
});

productBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    productLists[index].classList.toggle("hidden");
  });
});

companyBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    companyList[index].classList.toggle("hidden");
  });
});

connectBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    connectList[index].classList.toggle("hidden");
  });
});
