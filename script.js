// ---------- Mobile menu (☰ button) ----------
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ---------- Fade in on scroll ----------
const isMobile = window.matchMedia('(max-width: 768px)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const selectors = [
    '.section-title', '.section-sub', '.about-text', '.why-title',
    '.why .img-card', '.contact-card', '.contact-buttons',
    '.visit-text', '.visit-photos img', '.map'
  ];
  if (!isMobile) selectors.push('.highlights .img-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(selectors.join(',')).forEach(el => {
    const position = Array.from(el.parentElement.children).indexOf(el);
    el.style.transitionDelay = (position % 4) * 90 + 'ms';
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ---------- Carousel: the card in the middle gets bigger ----------
const carousel = document.querySelector('.highlights');

if (carousel) {
  const cards = carousel.querySelectorAll('.img-card');

  const setActive = () => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      cards.forEach(card => card.classList.remove('is-active'));
      return;
    }
    const middle = carousel.scrollLeft + carousel.clientWidth / 2;
    let closest = null;
    let smallest = Infinity;

    cards.forEach(card => {
      const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - middle);
      if (distance < smallest) { smallest = distance; closest = card; }
    });

    cards.forEach(card => card.classList.toggle('is-active', card === closest));
  };

  carousel.addEventListener('scroll', () => requestAnimationFrame(setActive), { passive: true });
  window.addEventListener('resize', setActive);
  setActive();
}

// ---------- Load the map only when tapped ----------
const mapBox = document.getElementById('map');
const mapButton = mapBox ? mapBox.querySelector('.map-load') : null;

if (mapBox && mapButton) {
  mapButton.addEventListener('click', () => {
    mapBox.classList.add('show');
    mapBox.innerHTML =
      '<iframe title="Cafe Pink on Google Maps" ' +
            'src="https://maps.google.com/maps?q=Cafe+Pink,+Hauz+Khas+Village,+New+Delhi&z=16&hl=en&output=embed" ' +
      'allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>';
  });
}