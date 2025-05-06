let modalIndex = 0;
const modalImages = [
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
