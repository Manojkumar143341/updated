let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.left = '100%';
  });
  slides[index].classList.add('active');
  slides[index].style.left = '0';
}

// Go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-play the slider every 5 seconds
setInterval(nextSlide, 2000);

// Initialize the first slide
showSlide(currentSlide);
