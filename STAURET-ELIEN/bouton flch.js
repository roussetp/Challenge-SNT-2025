// Sélectionner le bouton
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Fonction pour afficher ou masquer le bouton en fonction du défilement
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Fonction pour remonter en haut de la page en douceur
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
