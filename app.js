// Hamburger menu

const toggleButton = document.getElementById('toggle-button');
const dropdown = document.getElementById('dropdown');

dropdown.style.display = 'none'

toggleButton.addEventListener('click', () => {

  // add transition here?
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

const navLinks = document.querySelector('.navlinks');

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    const sectionId = event.target.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

// Reviews

const reviews = ["J'ai été impressionné par la qualité des services de Professionnel-Name. Leur équipe a travaillé en étroite collaboration avec moi pour comprendre mes besoins en matière de planification financière et m'a proposé des solutions personnalisées qui ont vraiment fait la différence. Je recommande vivement cette entreprise à tous ceux qui cherchent des services de planification financière de qualité.", "Je suis très satisfait des services d'assurance de Professionnel-Name. Leur équipe a été très professionnelle et a travaillé dur pour comprendre mes besoins en matière d'assurance. Ils m'ont proposé des produits d'assurance personnalisés qui ont vraiment répondu à mes besoins. Je recommande fortement cette entreprise à tous ceux qui cherchent des services d'assurance de qualité.", "Je suis très heureux d'avoir choisi Professionnel-Name pour mes services de gestion de patrimoine. Leur équipe a travaillé en étroite collaboration avec moi pour comprendre mes objectifs en matière de gestion de patrimoine et m'a proposé des solutions personnalisées qui ont vraiment fait la différence. Je recommande vivement cette entreprise à tous ceux qui cherchent des services de gestion de patrimoine de qualité."]; // Objects : nom, commentaire, rating

const reviewsContent = document.querySelector(".reviews-content");
const leftArrow = document.querySelector(".reviews-left-arrow");
const rightArrow = document.querySelector(".reviews-right-arrow");

let reviewIndex = 0;

function displayReview() {
  reviewsContent.textContent = reviews[reviewIndex];
}

displayReview();

leftArrow.addEventListener("click", () => {
  reviewIndex = (reviewIndex === 0) ? reviews.length - 1 : reviewIndex - 1;
  displayReview();
});

rightArrow.addEventListener("click", () => {
  reviewIndex = (reviewIndex === reviews.length - 1) ? 0 : reviewIndex + 1;
  displayReview();
});
