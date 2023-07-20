// Toggle mobile navigation
document.addEventListener('DOMContentLoaded', function () {
  const toggleNav = document.querySelector('.toggle-nav');
  const nav = document.querySelector('nav');

  toggleNav.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
});
