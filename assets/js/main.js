// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // Dark mode toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (darkModeToggle) {
    // Load theme from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('dark');
      updateDarkModeToggle(true);
    }
    
    darkModeToggle.addEventListener('click', function() {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('darkMode', isDark);
      updateDarkModeToggle(isDark);
    });
  }
  
  // Form submission
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Collect form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simulate form submission
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Thank you for reaching out! We will contact you within 24 hours.');
      contactForm.reset();
    });
  }
  
  // Newsletter signup
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = newsletterForm.querySelector('input[name="email"]').value;
      console.log('Newsletter signup:', email);
      
      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }
});

function updateDarkModeToggle(isDark) {
  const toggle = document.querySelector('.dark-mode-toggle');
  if (toggle) {
    toggle.innerHTML = isDark ? '☀️' : '🌙';
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add active class to navigation links
function updateActiveNav() {
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentLocation === '/' || currentLocation === '/index.html') {
      if (href === '/' || href === 'index.html') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else if (currentLocation.includes(href.replace('.html', ''))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Call updateActiveNav on page load
window.addEventListener('load', updateActiveNav);
