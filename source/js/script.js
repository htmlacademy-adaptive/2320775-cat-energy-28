const navToggle = document.querySelector('.header__toggle');
const navMenu = document.querySelector('.navigation__list');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('close');
});
