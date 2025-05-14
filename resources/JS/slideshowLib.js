let currentIndex = 0;
let autoSlideInterval;

const images = [
    './resources/images/liberec/Zelezna1.webp',
    './resources/images/liberec/Zelezna2.webp',
    './resources/images/liberec/store1.webp',
    './resources/images/liberec/store1.2.webp',
    './resources/images/liberec/store1.3.webp',
    './resources/images/liberec/store1.4.webp',
    './resources/images/liberec/store2.webp',
    './resources/images/liberec/store2.1.webp',
    './resources/images/liberec/app1.webp',
    './resources/images/liberec/app2kitch1.webp',
    './resources/images/liberec/app3kit.webp',
    './resources/images/liberec/app4kit.webp',
    './resources/images/liberec/bath1.webp',
    './resources/images/liberec/bath2.webp',
    './resources/images/liberec/bath3.webp',
    './resources/images/liberec/bed1.webp',
    './resources/images/liberec/bed2.webp',
    './resources/images/liberec/bed3.webp',
    './resources/images/liberec/bed4.webp',
    './resources/images/liberec/liv1.webp',
    './resources/images/liberec/liv2.webp',
    './resources/images/liberec/liv3.webp',
    './resources/images/liberec/liv4.webp',
    './resources/images/liberec/liv5.webp',
    './resources/images/liberec/liv6.webp',
    './resources/images/liberec/liv7.webp',
    './resources/images/liberec/det1.webp',
    './resources/images/liberec/det2.webp',
    './resources/images/liberec/det3.webp',
    './resources/images/liberec/gang1.webp',
    './resources/images/liberec/gang2.webp',
    './resources/images/liberec/gang3.webp',
    './resources/images/liberec/layout.png',
];

const altTexts = [
    'Liberec front 1',
    'Liberec front 2',
    'Store 1',
    'Store 1',
    'Store 1',
    'Store 1',
    'Store 2',
    'Store 2',
    'Kitchen 1',
    'Kitchen 2',
    'Kitchen 3',
    'Kitchen 4',
    'Bathroom 1',
    'Bathroom 2',
    'Bathroom 3y',
    'Bedroom 1',
    'Bedroom 2',
    'Bedroom 3',
    'Bedroom 4',
    'Living 1',
    'Living 2',
    'Living 3',
    'Living 4',
    'Living 5',
    'Living 6',
    'Living 7',
    'etc 1',
    'etc 2',
    'etc 3',
    'Hallway 1',
    'Hallway 2',
    'Hallway 3',
    'Layout',
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
