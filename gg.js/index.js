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

document.addEventListener('touchstart', function(event) {
    // Проверяем, был ли клик внутри элемента .stok-img-container
    if (!event.target.closest('.stok-img-container')) {
      // Если клик был снаружи, закрываем все imgList
        const allImgLists = document.querySelectorAll('.stok-img-list.active');
        allImgLists.forEach(imgList => {
            imgList.classList.remove('active');
        });
    }
});
