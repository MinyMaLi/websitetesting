// Create audio elements for hover and click sounds
const hoverSound = new Audio();
hoverSound.src = './sounds/hover-sound.wav';
hoverSound.volume = 0.2;

const clickSound = new Audio();
clickSound.src = './sounds/click-sound.mp3';
clickSound.volume = 0.9;

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play(true);
        });
        
        link.addEventListener('click', () => {
            clickSound.currentTime = 0;
            clickSound.play(true);
        });
    });
});


// Constants
const SLIDE_INTERVAL = 2500; // Milliseconds between slides
const PAUSE_THRESHOLD = 300;

// Selectors
const SLIDESHOW_CONTAINER = '.slideshow-container';
const SLIDES_SELECTOR = '.slides';
const DOTS_SELECTOR = '.dot';

class Slideshow {
  constructor() {
    this.slideIndex = 0;
    this.showingImage = true;
    this.slideIntervalId = null;
    this.slides = document.querySelectorAll(SLIDES_SELECTOR);
    this.dots = document.querySelectorAll(DOTS_SELECTOR);

    this.setupEventListeners();
    this.initializeSlideshow();
  }

  setupEventListeners() {
    const slideshowContainer = document.querySelector(SLIDESHOW_CONTAINER);
    
    if (!slideshowContainer) {
      console.error('Slideshow container not found');
      return;
    }
    
    slideshowContainer.addEventListener('mouseenter', () => this.pause());
    slideshowContainer.addEventListener('mouseleave', () => this.resume());
  }

  initializeSlideshow() {
    // Set initial state
    this.showSlide(0);
    this.activateDot(0);

    // Start slideshow
    this.startInterval();
  }

  showSlide(index) {
    // Reset all slides to hidden
    this.slides.forEach((slide, i) => {
      slide.style.display = 'none';
      this.dots[i].classList.remove('active');
    });

    // Show current slide and dot
    this.slides[index].style.display = 'block';
    this.dots[index].classList.add('active');

    // Always show image, hide alt text
    const slide = this.slides[index];
    const img = slide.querySelector('img');
    const altText = slide.querySelector('.alt-text');

    if (!img || !altText) {
      console.error('Image or alt text not found in slide');
      return;
    }

    // Always display image, hide text
    img.style.display = 'block';
    altText.style.display = 'none';
  }

  activateDot(index) {
    if (this.dots.length > index) {
      this.dots[index].classList.add('active');
    }
  }

  toggleImageAndCaption(img, altText) {
    if (this.showingImage) {
      img.style.display = 'block';
      altText.style.display = 'none';
    } else {
      img.style.display = 'none';
      altText.style.display = 'block';
    }
  }

  startInterval() {
    this.slideIntervalId = setInterval(() => this.nextSlide(), SLIDE_INTERVAL);
  }

  pause() {
    clearInterval(this.slideIntervalId);
  }

  resume() {
    this.startInterval();
  }

  nextSlide() {
    // Simply advance to next slide without showing text
    this.slideIndex++;
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    }
    
    // Always show image
    this.showingImage = true;
    this.showSlide(this.slideIndex);
  }

  toggleShowImage() {
    this.showingImage = !this.showingImage;
    this.showSlide(this.slideIndex);
  }
}

// Initialize slideshow only once when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const slideshowContainer = document.querySelector(SLIDESHOW_CONTAINER);
  if (slideshowContainer) {
    new Slideshow();
  } else {
    console.error('Slideshow container not found');
  }
});
