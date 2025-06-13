document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav__menu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
});
