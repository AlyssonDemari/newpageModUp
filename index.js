const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const shadow = document.querySelector('#shadow');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
    shadow.classList.toggle('active');
});