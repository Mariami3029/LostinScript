// Hero scroll animation
const heroSlide = document.querySelector('.hero-slide');
let scrollIndex = 0;
setInterval(() => {
  scrollIndex = (scrollIndex + 1) % heroSlide.children.length;
  heroSlide.style.transform = `translateX(-${scrollIndex * 100}%)`;
}, 5000);
// Lightbox Functionality for Image Gallery
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.getElementById('close-lightbox');

  // Open Lightbox on Image Click
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.src;
      lightbox.classList.add('visible');
    });
  });

  // Close Lightbox
  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
    lightboxImg.src = '';
  });

  // Close Lightbox on Background Click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('visible');
      lightboxImg.src = '';
    }
  });
});

// Open video gallery
document.getElementById('open-video-gallery').addEventListener('click', () => {
  const videoGallery = document.getElementById('video-gallery');
  videoGallery.style.display = videoGallery.style.display === 'none' ? 'flex' : 'none';
});

// Interactive Grid (Georgian Letters)
document.querySelectorAll('.grid-item').forEach(item => {
  item.addEventListener('click', () => {
    const audio = new Audio(item.dataset.audio);
    audio.play();

    const latin = item.dataset.latin;
    item.innerHTML = `<div>${item.innerHTML}<br>${latin}</div>`;
  });
});
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 0;

function updateSlides() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSlides();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateSlides();
});


