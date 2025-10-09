const slider = document.querySelector('.main-foto-list');
const slides = document.querySelectorAll('.main-foto-list-item');
const slideWidth = slides[0].offsetWidth;
const indicators = Array.from(document.querySelectorAll('.slider-indicator')); // Получаем все индикаторы
let currentSlide = 0;

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

export function nextSlide() {
    currentSlide = currentSlide + 1 // Переход к следующему слайду (по кругу)
    if (currentSlide === slides.length) {
        currentSlide = 0
    }
    slider.scrollLeft = currentSlide * slideWidth;
    updateIndicators();
}

setInterval(nextSlide, 4000);