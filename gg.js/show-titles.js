const hiddenTitle = document.querySelectorAll('.section-title');

export function checkBlocks() {
    hiddenTitle.forEach(block => {
        const blockTop = block.getBoundingClientRect().top; 
        const windowHeight = window.innerHeight; 

        if (blockTop < windowHeight - 50) { 
            block.classList.add('show'); 
        } else if (blockTop > windowHeight - 50) {
            block.classList.remove('show');
        }
});
};