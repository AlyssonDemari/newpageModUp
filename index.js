const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
});


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