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