let modalIndex = 0;
const modalImages = [
    './resources/images/teplice/Teplice front.webp',
    './resources/images/teplice/store 1.webp',
    './resources/images/teplice/store 3.webp',
    './resources/images/teplice/store 4.webp',
    './resources/images/teplice/store 5.webp',
    './resources/images/teplice/store 6.webp',
    './resources/images/teplice/hal 1.webp',
];

function openModal(startIndex) {
    modalIndex = startIndex;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = modalImages[modalIndex];
    modal.style.display = 'flex';
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
}

// Event listeners (ensure DOM is ready)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('prevBtn').addEventListener('click', () => changeModalImage(-1));
    document.getElementById('nextBtn').addEventListener('click', () => changeModalImage(1));
    document.getElementById('closeModal').addEventListener('click', closeModal);

    // Optional: click outside image closes modal
    document.getElementById('imageModal').addEventListener('click', (e) => {
        if (e.target.id === 'imageModal') closeModal();
    });
});
