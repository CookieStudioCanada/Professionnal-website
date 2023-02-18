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

const reviews = ["This is the first review", "This is the second review", "This is the third review"]; // Objects : nom, commentaire, rating

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
