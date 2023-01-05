const hamburger = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('ativo')
    menu.classList.toggle('ativo')
})