let currentIndex = 0;
let autoSlideInterval;

const images = [
    './resources/images/olomouc/Riegrova front 1.webp',
    './resources/images/olomouc/Riegrova front 2.webp',
    './resources/images/olomouc/Riegrova RockPoint store.webp',
    './resources/images/olomouc/store 1.webp',
    './resources/images/olomouc/store 2.webp',
    './resources/images/olomouc/store 3.webp',
    './resources/images/olomouc/Appartment kitchen.webp',
    './resources/images/olomouc/kitchen 2.webp',
    './resources/images/olomouc/Olomouc kitchen 2.webp',
    './resources/images/olomouc/bathroom 1.webp',
    './resources/images/olomouc/bathroom 2.webp',
    './resources/images/olomouc/bathroom 3.webp',
    './resources/images/olomouc/bedroom 1.webp',
    './resources/images/olomouc/bedroom 2.jpg',
    './resources/images/olomouc/hal appartement.webp',
    './resources/images/olomouc/living room.webp',
    './resources/images/olomouc/living room 2.webp',
    './resources/images/olomouc/map.webp',
];

const altTexts = [
    'Riegrova front 1',
    'Riegrova front 2',
    'RockPoint store front',
    'Store interior 1',
    'Store interior 2',
    'Store interior 3',
    'Apartment kitchen',
    'Kitchen view 2',
    'Olomouc kitchen alt',
    'Bathroom 1',
    'Bathroom 2',
    'Bathroom 3',
    'Bedroom 1',
    'Bedroom 2',
    'Apartment hallway',
    'Living room',
    'Living room 2',
    'Map of location',
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
