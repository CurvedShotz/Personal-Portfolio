// main.js - Handles dark/light mode and animations

document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;
  function setMode(dark) {
    if (dark) {
      body.classList.add('dark');
      modeToggle.textContent = '☀️';
    } else {
      body.classList.remove('dark');
      modeToggle.textContent = '🌙';
    }
  }
  // Check for saved mode
  const savedMode = localStorage.getItem('darkMode');
  setMode(savedMode === 'true');
  modeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark');
    setMode(isDark);
    localStorage.setItem('darkMode', isDark);
  });

  // Section reveal animations on scroll
  const revealEls = document.querySelectorAll('section, .card, .github-project');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.92;
    revealEls.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.style.opacity = 1;
        el.style.transform = 'none';
        el.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
      } else {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
}); 