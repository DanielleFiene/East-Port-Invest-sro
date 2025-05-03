let currentIndex = 0;

const images = [
    './resources/images/Martinkovice1.jpg',
    './resources/images/Martinkovice2.jpg',
    './resources/images/Martinkovice3.jpg',
    './resources/images/overzicht.png',
    './resources/images/Martinkovice4.jpg',
    './resources/images/Martinkovice5.jpg',
    './resources/images/Martinkovice6.jpg',
    './resources/images/Martinkovice7.jpg',
    './resources/images/Martinkovice8.jpg',
    './resources/images/Martinkovice9.jpg',
    './resources/images/Martinkovice10.jpg',
    './resources/images/huiskamer1.jpg',
    './resources/images/huiskamer2.jpg',
    './resources/images/kantoor1.jpg',
    './resources/images/gang1.jpg',
    './resources/images/gang2.webp',
    './resources/images/keuken1.jpg',
    './resources/images/keuken2.webp',
    './resources/images/eetkamer1.webp',
    './resources/images/overloop1.webp',
    './resources/images/overloop2.webp',
    './resources/images/slaapkamer1.jpg',
    './resources/images/slaapkamer2.jpg',
    './resources/images/slaapkamer3.webp',
    './resources/images/slaapkamer4.webp',
    './resources/images/badkamer1.jpg',
    './resources/images/badkamer2.webp',
    './resources/images/badkamer3.webp',
    './resources/images/stallen1.jpg',
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
