let currentIndex = 0;

const images = [
    './resources/images/olomouc/Riegrova front 1.jpg',
    './resources/images/olomouc/Riegrova front 2.jpg',
    './resources/images/olomouc/Riegrova RockPoint store.jpg',
    './resources/images/olomouc/store 1.jpg',
    './resources/images/olomouc/store 2.jpg',
    './resources/images/olomouc/store 3.jpg',
    './resources/images/olomouc/Appartment kitchen.jpg',
    './resources/images/olomouc/kitchen 2.jpg',
    './resources/images/olomouc/Olomouc kitchen 2.jpg',
    './resources/images/olomouc/bathroom 1.jpg',
    './resources/images/olomouc/bathroom 2.jpg',
    './resources/images/olomouc/bathroom 3.jpg',
    './resources/images/olomouc/bedroom 1.jpg',
    './resources/images/olomouc/bedroom 2.jpg',
    './resources/images/olomouc/hal appartement.jpg',
    './resources/images/olomouc/living room.jpg',
    './resources/images/olomouc/living room 2.jpg',
];

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop to the last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Loop to the first image
    }

    // Change the src of the image to the new image
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[currentIndex];
}
