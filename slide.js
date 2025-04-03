const images = document.querySelectorAll(".image-container img");
const slider = document.querySelector(".slider");
const sliderImg = document.getElementById("slider-img");
const sliderText = document.getElementById("slider-text");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


const descriptions = [
    "Photosnap : Le but de cet exercice était d'effectuer un grid avec les images.",
    "Projet 2 : Application web interactive pour la gestion des tâches.",
    "Projet 3 : Portfolio moderne avec animations fluides.",
    "Projet 4 : E-commerce avec système de paiement intégré.",
    "Projet 5 : Dashboard analytique avec graphiques interactifs.",
    "Projet 6 : Blog personnel avec gestion des articles."
];

let currentIndex = 0;

// Fonction pour mettre à jour l'image et la description
function updateSlider(index) {
    sliderImg.src = images[index].src;  // Change l'image
    sliderText.textContent = descriptions[index]; // Change la description
}

// Ouvrir le slider
function openSlider(index) {
    currentIndex = index;
    updateSlider(currentIndex);
    slider.style.display = "flex";
    document.body.classList.remove("scroll");
    document.body.classList.add("no-scroll");
}

// Fermer le slider
function closeSlider() {
    slider.style.display = "none";
    document.body.classList.remove("no-scroll");
    document.body.classList.add("scroll");
    
}

// Afficher l'image précédente
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider(currentIndex);
}

// Afficher l'image suivante
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider(currentIndex);
}

// Ajout des événements
images.forEach((img, index) => {
    img.addEventListener("click", () => openSlider(index));
});

closeBtn.addEventListener("click", closeSlider);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Fermer en cliquant en dehors de l'image
slider.addEventListener("click", (e) => {
    if (e.target === slider) closeSlider();
});

// Swipe tactile pour mobile
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        showNext(); // Swipe vers la gauche → image suivante
    } else if (touchEndX - touchStartX > 50) {
        showPrev(); // Swipe vers la droite → image précédente
    }
}
