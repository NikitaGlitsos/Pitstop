const slider = document.querySelector('.main-foto-list');
const slides = document.querySelectorAll('.main-foto-list-item');
const slideWidth = slides[0].offsetWidth;
const indicators = Array.from(document.querySelectorAll('.slider-indicator')); // Получаем все индикаторы
const videos = document.querySelectorAll('.video'); // Получаем все элементы <video> на странице

let currentSlide = 0;
let autoSlideTimeout; // Переменная для хранения ID таймера
let isTouchedOnVideo = false; // Флаг, указывающий на то, коснулись ли видео

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
    // Запускаем nextSlide только если не остановлен вручную
    if (!isMouseOverVideo || !isTouchedOnVideo) {
        autoSlideTimeout = setTimeout(nextSlide, 3000);
    }
}

export function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Переход к следующему слайду (по кругу)
    slider.scrollLeft = currentSlide * slideWidth;
    updateIndicators();
}

let isMouseOverVideo = false; // Флаг, указывающий на то, находится ли мышь над видео

videos.forEach(video => { // Перебираем каждый элемент video
    video.addEventListener('mouseover', () => {
        video.setAttribute('controls', 'controls');
        isMouseOverVideo = true; // Устанавливаем флаг
        isTouchedOnVideo = true;
        clearTimeout(autoSlideTimeout); // Останавливаем таймер
    });

    video.addEventListener('mouseout', () => {
        video.removeAttribute('controls');
        isMouseOverVideo = false; // Сбрасываем флаг
        isTouchedOnVideo = false;
        updateIndicators(); // Запускаем updateIndicators, чтобы возобновить цикл
    });
});

// Запускаем первоначальный цикл
updateIndicators();