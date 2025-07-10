let a = 0;

const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');

const images = Array.from(document.querySelectorAll('.foto-img'));
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImage.src = this.src;
        a = index;
        });
});

rightButton.addEventListener('click', function() {
    a++;
    if (a >= images.length) {
        a = 0;
        modalImage.src = images[a].src;
    } else {
        modalImage.src = images[a].src;
    }
});

leftButton.addEventListener('click', function() {
    a--;
    if (a < 0) {
        a = images.length - 1;
        modalImage.src = images[a].src;
    } else {
        modalImage.src = images[a].src;
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === "ArrowLeft") {
        a--;
        if (a < 0) {
            a = images.length - 1;
            modalImage.src = images[a].src;
        } else {
            modalImage.src = images[a].src;
        }
    } else if (evt.key === "ArrowRight") {
        a++;
        if (a >= images.length) {
            a = 0;
            modalImage.src = images[a].src;
        } else {
            modalImage.src = images[a].src;
    };
    };
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне изображения
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});