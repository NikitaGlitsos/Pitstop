import { checkBlocks } from './show-titles.js'

const footerButton = document.querySelector('.footer-button');
const footerNumber = document.querySelector('.footer-number')

footerButton.addEventListener('click', function() {
    console.log(footerNumber)
    footerNumber.classList.add('rainbow')
});

window.addEventListener('scroll', function () {
    footerNumber.classList.remove('rainbow')
});

// Вызываем функцию при загрузке страницы и при прокрутке
window.addEventListener('scroll', checkBlocks);

const elements = document.querySelectorAll('.stok-img-container'); // Замените на свой селектор

elements.forEach(element => {
    element.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Предотвращает стандартное поведение (например, выделение текста)
        const imgList = this.querySelector('.stok-img-list')
        if (imgList) {
            if (imgList.classList.contains('active')) {
                imgList.classList.remove('active');
            } else {
                imgList.classList.add('active');
            }
        }
});
});