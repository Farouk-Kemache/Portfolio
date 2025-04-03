document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.querySelector(".header_nav_menu");

    burgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
  