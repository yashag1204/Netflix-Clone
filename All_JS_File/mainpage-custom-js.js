const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slideIndex = 0;
const numImages = 10; // Assuming you have 10 images

prevButton.style.display = 'none'; // Hide the "Previous" button initially

function prevSlide() {
    slideIndex = (slideIndex - 1 + numImages) % numImages;
    updateSlider();
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % numImages;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100 / 6}%)`;

    // Show/hide navigation buttons based on slide position
    prevButton.style.display = slideIndex > 0 ? 'block' : 'none';
    nextButton.style.display = slideIndex < numImages - 1 ? 'block' : 'none';
}

// // Automatically advance the slider
// const autoAdvanceInterval = 3000; // Adjust the interval as needed
// let autoAdvanceTimer;

// function autoAdvance() {
//     autoAdvanceTimer = setInterval(nextSlide, autoAdvanceInterval);
// }

// // Start auto-advancing the slider
// autoAdvance();


// 
