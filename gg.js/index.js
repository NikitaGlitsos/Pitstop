import { checkBlocks } from './show-titles.js'
import { nextSlide, updateIndicators } from './scroler.js'

const footerButton = document.querySelector('.footer-button');
const footerNumber = document.querySelector('.footer-number')

const stokUl = document.querySelectorAll('.stok-img-list')

footerButton.addEventListener('click', function() {
    console.log(footerNumber)
    footerNumber.classList.add('rainbow')
});

window.addEventListener('scroll', function () {
    footerNumber.classList.remove('rainbow')
});

// Вызываем функцию при загрузке страницы и при прокрутке
window.addEventListener('scroll', checkBlocks);

function stokShow() {
    stokUl.forEach(block => {
        const blockTop = block.getBoundingClientRect().top; 
        const windowHeight = window.innerHeight; 

        if (blockTop < windowHeight - 90) { 
            block.classList.add('active'); 
        } else {
            block.classList.remove('active');
        }
});
};

function isTouchDevice() {
    return 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;
}

window.addEventListener('scroll', function() {
    if (isTouchDevice()) {
        stokShow()
    }
});

setInterval(nextSlide, 4000);


const header = document.querySelector('.header-img');
const slogan = document.querySelector('.slogan')

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        slogan.classList.add('none')
    } else {
        header.classList.remove('scrolled');
        slogan.classList.remove('none')
    }
});