const watchNowButton = document.querySelector('.btn');
const trailerContainer = document.querySelector('.trailer-container');
const closeIcon = document.querySelector('.close-icon');

// Show the trailer container when the "Watch now" button is clicked
watchNowButton.addEventListener('click', () => {
  trailerContainer.classList.add('active');
});

// Hide the trailer container when the close icon is clicked
closeIcon.addEventListener('click', () => {
  trailerContainer.classList.remove('active');
});
