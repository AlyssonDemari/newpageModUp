const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const shadow = document.querySelector('#shadow');

const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
    shadow.classList.toggle('active');
};

hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); 
    toggleMenu();
});

hamburger.addEventListener('touchstart', (event) => {
    event.stopPropagation(); 
    toggleMenu();
});

const closeMenu = () => {
    navMobile.classList.remove('active');
    hamburger.classList.remove('active');
    shadow.classList.remove('active');
};

document.addEventListener('click', closeMenu);
document.addEventListener('touchstart', closeMenu);





const wrapper = document.querySelector('.wrapper-cards');
const firstRadio = document.querySelector('#primeiro');
const secondRadio  = document.querySelector('#segundo');
const thirdRadio  = document.querySelector('#terceiro');

const moveFirstToLast = () =>{
    const firstCard = wrapper.querySelector('.card:first-child');
    const seconCard = wrapper.querySelector('.card:nth-child(2)');

    wrapper.appendChild(firstCard)
    wrapper.appendChild(seconCard)
};

const viewCheck = () => {
    secondRadio.addEventListener('change', () => {
        moveFirstToLast()
    })
    thirdRadio.addEventListener('change', () => {
        moveFirstToLast()
    })
    firstRadio.addEventListener('change', () => {
        moveFirstToLast()
    })
}

viewCheck() ;