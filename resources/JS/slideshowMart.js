let currentIndex = 0;

const images = [
    './resources/images/martinkovice/Martinkovice1.webp',
    './resources/images/martinkovice/Martinkovice2.webp',
    './resources/images/martinkovice/Martinkovice3.webp',
    './resources/images/martinkovice/overzicht.png',
    './resources/images/martinkovice/Martinkovice4.webp',
    './resources/images/martinkovice/Martinkovice5.webp',
    './resources/images/martinkovice/Martinkovice6.webp',
    './resources/images/martinkovice/Martinkovice7.webp',
    './resources/images/martinkovice/Martinkovice8.webp',
    './resources/images/martinkovice/Martinkovice9.webp',
    './resources/images/martinkovice/Martinkovice10.jpg',
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
    './resources/images/martinkovice/slaapkamer1.jpg',
    './resources/images/martinkovice/slaapkamer2.jpg',
    './resources/images/martinkovice/slaapkamer3.webp',
    './resources/images/martinkovice/slaapkamer4.webp',
    './resources/images/martinkovice/badkamer1.jpg',
    './resources/images/martinkovice/badkamer2.webp',
    './resources/images/martinkovice/badkamer3.webp',
    './resources/images/martinkovice/stallen1.jpg',
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
