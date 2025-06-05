let modalIndex = 0;
const modalImages = [
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
