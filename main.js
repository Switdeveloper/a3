/**
 * SwitDeveloper - Vanilla JS Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply observer to all elements with .fade-up class
  const fadeElements = document.querySelectorAll('.fade-up');
  fadeElements.forEach(el => observer.observe(el));

  // Add delay to staggered elements within grids
  const staggeredContainers = document.querySelectorAll('.staggered-children');
  staggeredContainers.forEach(container => {
    const children = container.querySelectorAll('.fade-up');
    children.forEach((child, index) => {
      child.style.transitionDelay = `${index * 0.1}s`;
    });
  });

  // Mark active nav link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
