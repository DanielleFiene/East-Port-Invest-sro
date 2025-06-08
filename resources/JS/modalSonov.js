let modalIndex = 0;

const modalImages = [
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
    './resources/images/sonov/main-house/pelletkachel2.webp',
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
