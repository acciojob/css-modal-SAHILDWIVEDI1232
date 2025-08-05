//your JS code here. If required.
// Get modal element
const modal = document.getElementById('modal');

// Get open modal button
const openModalBtn = document.getElementById('openModal');

// Get close button
const closeModalBtn = document.querySelector('.close-modal');

// Listen for open click
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Listen for close click
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});