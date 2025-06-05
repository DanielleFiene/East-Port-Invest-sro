let currentIndex = 0;

const images = [
    './resources/images/sonov/overzicht/overzicht5.webp',
    './resources/images/sonov/overzicht/overzichtkaartjerodelijn1.webp',
    './resources/images/sonov/overzicht/overzicht6.webp',
    './resources/images/sonov/overzicht/overzicht7.webp',
    './resources/images/sonov/overzicht/overzicht1.webp',
    './resources/images/sonov/overzicht/overzicht3.webp',
    './resources/images/sonov/overzicht/overzicht2.webp',
    './resources/images/sonov/main-house/main-house-overlay.png',
    './resources/images/sonov/main-house/hal 1.webp',
    './resources/images/sonov/main-house/sonov-huiskamer.webp',
    './resources/images/sonov/main-house/keuken.webp',
    './resources/images/sonov/main-house/eetkamer2.webp',
    './resources/images/sonov/main-house/raam detail.webp',
    './resources/images/sonov/main-house/gang 1.webp',
    './resources/images/sonov/main-house/bathroom 2 1.webp',
    './resources/images/sonov/main-house/washok.webp',
    './resources/images/sonov/main-house/wc.webp',
    './resources/images/sonov/main-house/trap kelder.webp',
    './resources/images/sonov/main-house/kelder 1.webp',
    './resources/images/sonov/main-house/kelder 2.webp',
    './resources/images/sonov/main-house/trap 3.webp',
    './resources/images/sonov/main-house/extra room 2.webp',
    './resources/images/sonov/main-house/bedroom1.webp',
    './resources/images/sonov/main-house/office.webp',
    './resources/images/sonov/main-house/bathroom1.webp',
    './resources/images/sonov/main-house/zolder 3.webp',
    './resources/images/sonov/buiten/sonov app buiten mooi.webp',
    './resources/images/sonov/buiten/sonov paadje mooi.webp',
    './resources/images/sonov/buiten/sonov hoofd buiten mooi.webp',
    './resources/images/sonov/appartment/guesthouse.png',
    './resources/images/sonov/appartment/hal 2.webp',
    './resources/images/sonov/appartment/hal1.webp',
    './resources/images/sonov/appartment/app-living1.webp',
    './resources/images/sonov/appartment/app-living2.webp',
    './resources/images/sonov/appartment/app living 3.webp',
    './resources/images/sonov/appartment/toilet.webp',
    './resources/images/sonov/appartment/detail.webp',
    './resources/images/sonov/appartment/kelder 1.webp',
    './resources/images/sonov/appartment/laundry.webp',
    './resources/images/sonov/appartment/trap 1.webp',
    './resources/images/sonov/appartment/overloop.webp',
    './resources/images/sonov/appartment/bedroom 1.webp',
    './resources/images/sonov/appartment/bathroom.webp',
    './resources/images/sonov/appartment/bedroom 1.webp',
    './resources/images/sonov/appartment/bedroom 2.webp',
    './resources/images/sonov/appartment/bedroom 2 2.webp',
    './resources/images/sonov/appartment/bathroom 2.webp',
    './resources/images/sonov/appartment/bedroom 3.webp',
    './resources/images/sonov/appartment/bedroom 3 2.webp',
];

const altTexts = [
    'Sonov overview outside 1',
    'Sonov overview outside 2',
    'Sonov overview outside 3',
    'Sonov overview outside 4',
    'Sonov overview outside 5',
    'Sonov overview outside 6',
    'Main house overlay',
    'Main house hallway',
    'Main house living room',
    'Main house kitchen',
    'Main house dining room',
    'Main house window detail',
    'Main house hallway',
    'Main house bathroom',
    'Main house laundry room',
    'Main house toilet',
    'Main house stairs to basement',
    'Main house basement',
    'Main house basement',
    'Main house stairs',
    'Main house extra room',
    'Main house bedroom',
    'Main house office',
    'Main house bathroom',
    'Main house attic',
    'Sonov exterior view apartment',
    'Sonov exterior path',
    'Sonov exterior main entrance',
    'Guesthouse overview',
    'Apartment hallway 1',
    'Apartment hallway 2',
    'Apartment living room',
    'Apartment living room',
    'Apartment living room',
    'Apartment toilet',
    'Apartment interior detail',
    'Apartment basement',
    'Apartment laundry room',
    'Apartment stairs',
    'Apartment landing',
    'Apartment bedroom',
    'Apartment bathroom',
    'Apartment bedroom',
    'Apartment bedroom',
    'Apartment bedroom',
    'Apartment bathroom',
    'Apartment bedroom',
    'Apartment bedroom)'

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
