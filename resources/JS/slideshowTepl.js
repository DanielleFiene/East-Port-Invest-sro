let currentIndex = 0;
let autoSlideInterval;

const images = [
    './resources/images/teplice/Teplice front.webp',
    './resources/images/teplice/store 1.webp',
    './resources/images/teplice/store 3.webp',
    './resources/images/teplice/store 4.webp',
    './resources/images/teplice/store 5.webp',
    './resources/images/teplice/store 6.webp',
    './resources/images/teplice/hal 1.webp',
];

const altTexts = [
    'Front store',
    'Store',
    'Store',
    'Store',
    'Store',
    'Store',
];

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

function updateImage() {
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[currentIndex];
    imageElement.alt = altTexts[currentIndex];
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateImage();
    stopAutoSlide(); // Stop autoplay if user interacts
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 3000); // 3 seconds
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

// Start autoplay when page loads
window.addEventListener('DOMContentLoaded', () => {
    updateImage();
    startAutoSlide();

    // Stop autoplay if user clicks on nav buttons or image
    const navButtons = document.querySelectorAll('.gallery-navigation button');
    const image = document.getElementById('current-image');

    [...navButtons, image].forEach(el => {
        el.addEventListener('click', stopAutoSlide);
    });
});
