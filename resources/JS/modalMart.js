let modalIndex = 0;
const modalImages = [
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

function openModal(startIndex) {
    modalIndex = startIndex;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = modalImages[modalIndex];
    modal.style.display = 'flex';

    populateThumbnails();
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function changeModalImage(direction) {
    modalIndex += direction;
    if (modalIndex < 0) {
        modalIndex = modalImages.length - 1;
    } else if (modalIndex >= modalImages.length) {
        modalIndex = 0;
    }
    const modalImage = document.getElementById('modalImage');
    modalImage.src = modalImages[modalIndex];
    updateActiveThumbnail();
}

function populateThumbnails() {
    const strip = document.getElementById('thumbnailStrip');
    strip.innerHTML = '';

    modalImages.forEach((src, index) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.alt = `Thumbnail ${index + 1}`;
        thumb.classList.add('thumbnail');
        if (index === modalIndex) thumb.classList.add('active');

        thumb.addEventListener('click', () => {
            modalIndex = index;
            document.getElementById('modalImage').src = modalImages[modalIndex];
            updateActiveThumbnail();
        });

        strip.appendChild(thumb);
    });
}

function updateActiveThumbnail() {
    const thumbs = document.querySelectorAll('#thumbnailStrip img');
    thumbs.forEach((img, index) => {
        img.classList.toggle('active', index === modalIndex);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prevBtn').addEventListener('click', () => changeModalImage(-1));
    document.getElementById('nextBtn').addEventListener('click', () => changeModalImage(1));
    document.getElementById('closeModal').addEventListener('click', closeModal);

    document.getElementById('imageModal').addEventListener('click', (e) => {
        if (e.target.id === 'imageModal') closeModal();
    });
});
