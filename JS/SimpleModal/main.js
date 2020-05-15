// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementById('closeBtn');
// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// function to open modal
function openModal() {
  modal.style.display = 'block';
}
// function to close modal
function closeModal() {
  modal.style.display = 'none';
}
// function to close modal if outside click
function outsideClick(e) {
  console.log(e);
  // console.log(e.target);
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
