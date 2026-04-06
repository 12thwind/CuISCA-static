const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.approach-card, .principle-card, .element, .pull-quote, .inclusive-box, .ceremonies-intro, .section-heading, .eyebrow'
).forEach((el, i) => {
  el.classList.add('fade-up');
  // Stagger siblings within the same grid parent
  const siblings = el.parentElement.querySelectorAll('.fade-up');
  if (siblings.length > 1) {
    const idx = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = `${idx * 0.1}s`;
  }
  observer.observe(el);
});
