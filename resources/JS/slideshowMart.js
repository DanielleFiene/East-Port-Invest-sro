let currentIndex = 0;

const images = [
    './resources/images/martinkovice/Martinkovice1.webp',
    './resources/images/martinkovice/Martinkovice2.webp',
    './resources/images/martinkovice/Martinkovice3.webp',
    './resources/images/martinkovice/overzicht.webp',
    './resources/images/martinkovice/Martinkovice4.webp',
    './resources/images/martinkovice/Martinkovice5.webp',
    './resources/images/martinkovice/Martinkovice6.webp',
    './resources/images/martinkovice/Martinkovice7.webp',
    './resources/images/martinkovice/Martinkovice8.webp',
    './resources/images/martinkovice/Martinkovice9.webp',
    './resources/images/martinkovice/Martinkovice10.webp',
    './resources/images/martinkovice/huiskamer1.webp',
    './resources/images/martinkovice/huiskamer2.webp',
    './resources/images/martinkovice/kantoor1.webp',
    './resources/images/martinkovice/gang1.webp',
    './resources/images/martinkovice/gang2.webp',
    './resources/images/martinkovice/keuken1.webp',
    './resources/images/martinkovice/keuken2.webp',
    './resources/images/martinkovice/eetkamer1.webp',
    './resources/images/martinkovice/overloop1.webp',
    './resources/images/martinkovice/overloop2.webp',
    './resources/images/martinkovice/slaapkamer1.webp',
    './resources/images/martinkovice/slaapkamer2.webp',
    './resources/images/martinkovice/slaapkamer3.webp',
    './resources/images/martinkovice/slaapkamer4.webp',
    './resources/images/martinkovice/badkamer1.webp',
    './resources/images/martinkovice/badkamer2.webp',
    './resources/images/martinkovice/badkamer3.webp',
    './resources/images/martinkovice/stallen1.webp',
];

const altTexts = [
    'Martinkovice overview outside 1',
    'Martinkovice overview outside 2',
    'Martinkovice overview outside 3',
    'Martinkovice overview outside 4',
    'Martinkovice overview outside 5',
    'Martinkovice overview outside 6',
    'Martinkovice overview outside 7',
    'Martinkovice overview outside 8',
    'Martinkovice overview outside 9',
    'Martinkovice outside grilling space',
    'Martinkovice living room 1',
    'Martinkovice living room 2',
    'Martinkovice office',
    'Martinkovice hallway',
    'Martinkovice hallway 2',
    'Martinkovice kitchen 1',
    'Martinkovice kitchen 1',
    'Martinkovice dining room',
    'Martinkovice upstairs 1',
    'Martinkovice upstairs 2',
    'Martinkovice bedroom 1',
    'Martinkovice bedroom 2',
    'Martinkovice bedroom 3',
    'Martinkovice bedroom 4',
    'Martinkovice bathroom 1',
    'Martinkovice bathroom 2',
    'Martinkovice bathroom 3',
    'Martinkovice stables inside',
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
