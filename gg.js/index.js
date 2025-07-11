import { checkBlocks } from './show-titles.js'

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

        if (blockTop < windowHeight - 90 && blockTop > windowHeight - 160) { 
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