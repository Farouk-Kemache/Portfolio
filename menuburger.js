const menu = document.querySelector(".burger");
const nav = document.querySelector(".header_nav_menu");
const closeDeux = document.querySelector(".deux");
const closeTrois = document.querySelector(".trois");

menu.addEventListener("click", () => {
    nav.classList.toggle("burger-actif");
    menu.classList.toggle("un-actif");
    closeDeux.classList.toggle("deux-actif");
    closeTrois.classList.toggle("trois-actif");
});