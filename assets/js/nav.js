// assets/js/nav.js
(function () {
  var nav  = document.getElementById('site-nav');
  var hero = document.getElementById('hero');
  if (!nav || !hero) return;

  var observer = new IntersectionObserver(
    function (entries) {
      nav.classList.toggle('visible', !entries[0].isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(hero);

  // Hamburger
  var btn    = nav.querySelector('.nav-hamburger');
  var drawer = document.querySelector('.nav-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    drawer.setAttribute('aria-hidden', String(open));
    drawer.classList.toggle('open', !open);
  });

  // Close drawer on link click
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      drawer.classList.remove('open');
    });
  });
}());
