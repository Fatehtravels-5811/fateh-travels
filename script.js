const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('navbar').querySelector('ul');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('show');
});
