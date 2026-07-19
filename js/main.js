document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const modeToggle = document.getElementById('modeToggle');
  const storedMode = localStorage.getItem('lightMode');

  const setMode = (isLight) => {
    body.classList.toggle('light', isLight);
    modeToggle.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('lightMode', String(isLight));
  };

  setMode(storedMode === 'true');

  modeToggle.addEventListener('click', () => {
    const isLight = !body.classList.contains('light');
    setMode(isLight);
  });

  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.14 });

  revealEls.forEach((el) => observer.observe(el));

  const parallaxTargets = document.querySelectorAll('[data-parallax]');
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 14;
    const y = (event.clientY / window.innerHeight - 0.5) * 14;

    parallaxTargets.forEach((target, index) => {
      const intensity = (index + 1) * 0.5;
      target.style.transform = `translate3d(${x * intensity}px, ${y * intensity}px, 0)`;
    });
  });
}); 