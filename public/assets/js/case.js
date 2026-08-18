/* Case study page enhancements. Everything here is progressive: with JS off the
   page is fully readable, nothing is hidden, and all links still work. */
(function () {
  document.documentElement.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- reveal blocks as they enter the viewport --------------------------- */
  var revealables = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealables.forEach(function (el) { revealObserver.observe(el); });
  }

  /* --- count metrics up on first view ------------------------------------ */
  // Values are strings like "$20M", "1000s", "5", "Pan-India" — only animate
  // the ones with a real leading number, and keep prefix/suffix intact.
  function animateMetric(el) {
    var full = el.getAttribute('data-count-to') || el.textContent;
    var match = full.match(/^(\D*?)(\d[\d,]*)(.*)$/);
    if (!match) return;
    var prefix = match[1], target = parseInt(match[2].replace(/,/g, ''), 10), suffix = match[3];
    if (!isFinite(target) || target === 0) return;

    var duration = 900;
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = full;
    }
    requestAnimationFrame(step);
  }

  var metrics = document.querySelectorAll('.metric-value');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var metricObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateMetric(entry.target);
          metricObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    metrics.forEach(function (el) { metricObserver.observe(el); });
  }

  /* --- highlight the section currently on screen in the sticky subnav ----- */
  var links = [].slice.call(document.querySelectorAll('.case-subnav a'));
  if (links.length && 'IntersectionObserver' in window) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

    var sections = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });
      var bestId = null, bestRatio = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestRatio) { bestRatio = visible[id]; bestId = id; }
      });
      links.forEach(function (a) { a.classList.remove('is-current'); });
      if (bestId && byId[bestId]) byId[bestId].classList.add('is-current');
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] });

    sections.forEach(function (s) { spy.observe(s); });
  }
})();
