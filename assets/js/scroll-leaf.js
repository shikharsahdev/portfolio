/* A quiet botanical accent: illustrated leaves drift during scrolling and
   scatter briefly from intentional clicks. The topbar state remains here so
   this shared script can keep handling its scroll treatment too. */
(function () {
  'use strict';

  var topbar = document.querySelector('.topbar');
  function updateTopbar() {
    if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  updateTopbar();
  window.addEventListener('scroll', updateTopbar, { passive: true });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var palettes = [
    ['#8ea85a', '#587641', '#354f31'],
    ['#9cad62', '#647e45', '#405b35'],
    ['#839c50', '#526f3d', '#354e30']
  ];
  var sequence = 0;
  var lastScrollAt = 0;
  var emitter = null;

  function makeSvg() {
    var colors = palettes[Math.floor(Math.random() * palettes.length)];
    var gradientId = 'botanical-leaf-' + (++sequence);
    return '<svg viewBox="0 0 80 116" aria-hidden="true" focusable="false">' +
      '<defs><linearGradient id="' + gradientId + '" x1=".18" y1=".08" x2=".82" y2=".92" gradientUnits="objectBoundingBox">' +
      '<stop stop-color="' + colors[0] + '"/><stop offset=".52" stop-color="' + colors[1] + '"/><stop offset="1" stop-color="' + colors[2] + '"/></linearGradient></defs>' +
      '<path class="leaf-blade" fill="url(#' + gradientId + ')" d="M38 101C29 91 10 75 8 53 6 31 19 15 40 7c20 9 34 24 32 46-2 22-22 40-34 48Z"/>' +
      '<path class="leaf-highlight" d="M39 94c-7-17-21-32-22-49-1-13 7-25 20-33"/>' +
      '<path class="leaf-vein" d="M39 99c1-25 1-57 1-90M39 35C30 32 24 27 18 20m22 25c10-3 17-9 23-16M39 56c-10-4-18-10-25-19m25 31c10-4 18-11 26-20M39 78c-8-4-14-10-20-17m20 27c8-5 14-11 19-18"/>' +
      '<path class="leaf-petiole" d="M38 99c-1 6-3 10-6 14"/>' +
      '</svg>';
  }

  function addParticle(kind, x, y, settings) {
    var particle = document.createElement('span');
    particle.className = 'leaf-particle leaf-particle--' + kind;
    particle.setAttribute('aria-hidden', 'true');
    particle.innerHTML = makeSvg();
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--leaf-duration', settings.duration + 's');
    particle.style.setProperty('--leaf-start', settings.start + 'deg');
    particle.style.setProperty('--leaf-spin', settings.spin + 'deg');
    if (kind === 'fall') {
      particle.style.setProperty('--leaf-drift', settings.drift + 'vw');
    } else {
      particle.style.setProperty('--leaf-burst-x', settings.burstX + 'px');
      particle.style.setProperty('--leaf-burst-y', settings.burstY + 'px');
    }
    particle.addEventListener('animationend', function () { particle.remove(); }, { once: true });
    document.body.appendChild(particle);
  }

  function addFallingLeaf() {
    if (document.querySelectorAll('.leaf-particle--fall').length >= 3) return;
    var x = 18 + Math.random() * Math.max(30, window.innerWidth - 42);
    addParticle('fall', x, -18, {
      duration: 3.2 + Math.random() * 1.4,
      start: -32 + Math.random() * 64,
      spin: 150 + Math.random() * 220,
      drift: -10 + Math.random() * 20
    });
  }

  window.addEventListener('scroll', function () {
    lastScrollAt = performance.now();
    if (emitter !== null) return;

    addFallingLeaf();
    emitter = window.setInterval(function () {
      if (performance.now() - lastScrollAt > 850) {
        window.clearInterval(emitter);
        emitter = null;
        return;
      }
      addFallingLeaf();
    }, 900);
  }, { passive: true });

  document.addEventListener('click', function (event) {
    if (event.button !== 0 || !(event.target instanceof Element)) return;
    if (!event.target.closest('a, button, [role="button"], summary, input[type="submit"]')) return;

    for (var i = 0; i < 3; i += 1) {
      var angle = (Math.PI * 2 * i / 3) + (Math.random() - .5) * .55;
      var distance = 30 + Math.random() * 26;
      addParticle('burst', event.clientX - 10, event.clientY - 14, {
        duration: .85 + Math.random() * .25,
        start: -35 + Math.random() * 70,
        spin: -160 + Math.random() * 320,
        burstX: Math.cos(angle) * distance,
        burstY: Math.sin(angle) * distance - 12
      });
    }
  }, { passive: true });
})();
