// assets/js/nav.js
(function () {
  var nav  = document.getElementById('site-nav');
  var hero = document.getElementById('hero');

  var observer = new IntersectionObserver(
    function (entries) {
      nav.classList.toggle('visible', !entries[0].isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(hero);
}());
