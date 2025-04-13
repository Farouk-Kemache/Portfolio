const images = document.querySelectorAll(".image-container img");
const slider = document.querySelector(".slider");
const sliderImg = document.getElementById("slider-img");
const sliderText = document.getElementById("slider-text");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


const descriptions = [
    "Photosnap Page d'accueil : Reproduction de la page d’accueil d’un site pour photographes. Intégration responsive HTML/CSS à partir d’une maquette, avec mise en avant visuelle des stories et des fonctionnalités. Travail axé sur le design en grille, le positionnement d’images et l’équilibre typographique.",
    "Photosnap Page Stories :Intégration responsive d’une galerie de récits visuels. Grille CSS fluide, effet de hover soigné et mise en page dynamique basée sur une maquette. Projet utile pour travailler l’accessibilité, les layouts flexibles et la gestion du contenu dynamique.",
    "Photosnap Page Pricing : J'ai codé cette page de tarification pour Photosnap en HTML, CSS et JavaScript. Elle présente trois plans (Basic, Pro, Business) avec un design épuré et une palette minimaliste (noir, blanc, rouge). L'objectif : offrir une expérience fluide et engageante pour les photographes et créateurs de contenu.",
    "Testimonial Grid : Conception et codage d'une section de témoignages clients pour un bootcamp de développement web. Réalisée en HTML et CSS, cette section met en avant des expériences positives des participants avec des blocs colorés (violet, noir, blanc) et des citations claires. L'objectif : renforcer la crédibilité du programme grâce à des retours authentiques.",
    "Interactive Card : Conception d'une interface de formulaire de paiement avec un design moderne et intuitif. Réalisé en HTML et CSS, le formulaire inclut des champs pour les informations de carte (nom du titulaire, numéro de carte, date d'expiration, CVC) et un bouton de confirmation pour soumettre les données. L'interface est visuellement attrayante grâce à une palette de couleurs dynamique (violet, rose, noir).",
    "Fylo : Conception d'une interface de tableau de bord pour afficher l'utilisation de stockage sur une plateforme (Fylo). Réalisé en HTML et CSS, ce design présente un visuel moderne avec des icônes claires et un indicateur de progression (barre de chargement) pour montrer l'espace restant (185 GB sur 1000 GB). L'interface est minimaliste et facile à comprendre."
];

let currentIndex = 0;

// Fonction pour mettre à jour l'image et la description
function updateSlider(index) {
    sliderImg.src = images[index].src; // Change l'image
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