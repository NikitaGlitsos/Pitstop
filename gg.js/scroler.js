import { isTouchDevice } from './index.js'

const slider = document.querySelector('.main-foto-list');
const slides = document.querySelectorAll('.main-foto-list-item');
const slideWidth = slides[0].offsetWidth;
const indicators = Array.from(document.querySelectorAll('.slider-indicator')); // Получаем все индикаторы
const videos = document.querySelectorAll('.video'); // Получаем все элементы <video> на странице

const indicatorsNone = document.querySelector('.slider-indicators')

const scrollFhone = document.querySelectorAll('.scroll-baners')


let currentSlide = 0;
let autoSlideTimeout; // Переменная для хранения ID таймера
let isMouseOverVideo = false;

videos.forEach(video => { // Перебираем каждый элемент video
    video.addEventListener('mouseover', () => {
        video.setAttribute('controls', 'controls');
        isMouseOverVideo = true; // Устанавливаем флаг
        clearTimeout(autoSlideTimeout); // Останавливаем таймер
    });

    video.addEventListener('mouseout', () => {
        video.removeAttribute('controls');
        isMouseOverVideo = false; // Сбрасываем флаг
        updateIndicators(); // Запускаем updateIndicators, чтобы возобновить цикл
    });
});

if (isTouchDevice()) {
    videos.forEach(video => {
        video.setAttribute('controls', 'controls')
        video.removeAttribute('autoplay')
        video.removeAttribute('loop')
    });
    scrollFhone.forEach(simbol => {
        simbol.classList.add('not-none-scroll-simbol')
    });
    indicatorsNone.classList.add('none-indicators')
} else {
    indicatorsNone.classList.remove('none-indicators')
    scrollFhone.forEach(simbol => {
        simbol.classList.remove('not-none-scroll-simbol')
    });
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    if (!isMouseOverVideo) {
        autoSlideTimeout = setTimeout(nextSlide, 3000);
    }
    // Запускаем nextSlide только если не остановлен вручную
}

export function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Переход к следующему слайду (по кругу)
    slider.scrollLeft = currentSlide * slideWidth;
    updateIndicators();
}

// Запускаем первоначальный цикл
updateIndicators();