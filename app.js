const openModal = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
// target the X in the modal overlay
const closeButton = document.querySelector('.close-btn');

// add event listener to open modal
openModal.addEventListener('click', ()=>{
    console.log(modalOverlay.classList)
    modalOverlay.classList.add('open-modal')
});

// add event listener to close the modal if open
closeButton.addEventListener('click', ()=>{
    console.log(modalOverlay.classList);
    modalOverlay.classList.toggle('open-modal')
});
