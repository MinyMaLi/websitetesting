document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  const allergiesBtn = document.querySelector('a[href="/contact.html"].contact-btn');
  const menuBtn = document.querySelector('a[href="/menu.html"].contact-btn');
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileAllergies = document.getElementById('mobileAllergies');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  allergiesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalImg.src = 'pics/allergies.png'; // Change to your allergies image path
    modal.style.display = 'flex';
  });

  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalImg.src = 'pics/menu.jpeg'; // Change to your menu image path
    modal.style.display = 'flex';
  });

  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    modalImg.src = '';
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
    }
  });

  modalImg.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('zoomed');
  });

  burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking outside or on a link
  document.addEventListener('click', function(e) {
    if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && e.target !== burgerBtn) {
      mobileMenu.classList.remove('active');
    }
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });

  if (mobileAllergies) {
    mobileAllergies.addEventListener('click', function(e) {
      e.preventDefault();
      modalImg.src = 'pics/allergies.png'; // Change to your allergies image path
      modal.style.display = 'flex';
      mobileMenu.classList.remove('active');
    });
  }
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      modalImg.src = 'pics/menu.jpeg'; // Change to your menu image path
      modal.style.display = 'flex';
      mobileMenu.classList.remove('active');
    });
  }
});