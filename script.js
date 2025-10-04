// small helpers for nav and footer year
document.addEventListener('DOMContentLoaded', function () {
  // add current year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
