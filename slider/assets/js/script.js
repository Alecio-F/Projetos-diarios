const slider = document.querySelectorAll('.img-slider')
const btnPrev = document.querySelector('#prev-button')
const btnNext = document.querySelector('#next-button')

let currentSlide = 0

function hideSlide() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlide() {
    slider[currentSlide].classList.add('on')
}

function nextSlide() {
    hideSlide()
    if(currentSlide == slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlide()
}

function prevSlide() {
    hideSlide()
    if(currentSlide == 0) {
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlide()
}

btnPrev.addEventListener('click', prevSlide)
btnNext.addEventListener('click', nextSlide)

console.log(slider)