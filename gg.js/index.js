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
const elements1 = document.querySelectorAll('.stok-img-container');

elements.forEach(element => {
    element.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Предотвращает стандартное поведение (например, выделение текста)
        const imgList = this.querySelector('.stok-img-list')
        if (imgList) {
            imgList.classList.add('active');            
        }
});
});

document.addEventListener('touchstart', function(event) {
    // Проверяем, был ли клик внутри элемента .stok-img-container
    if (!event.target.closest('.stok-img-container') || event.target.closest('.stok-img-container')) {

        const allImgLists = document.querySelectorAll('.stok-img-list.active');
        allImgLists.forEach(imgList => {
            imgList.classList.remove('active');
        });
    }
});
