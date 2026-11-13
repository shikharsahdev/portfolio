/* A quiet botanical accent: illustrated leaves drift continuously and
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
  var leaves = [];
  var lastFrame = null;
  var lastScrollY = window.scrollY;
  var gust = 0;

  function makeSvg(falling) {
    var colors = palettes[Math.floor(Math.random() * palettes.length)];
    var gradientId = 'botanical-leaf-' + (++sequence);
    var artwork = falling
      ? '<path fill="url(#' + gradientId + ')" d="M33 101C19 92 9 77 11 60c2-23 26-35 50-53-2 18 10 34 5 53-4 18-18 34-33 41Z"/>' +
        '<path class="leaf-vein" d="M33 101C31 71 44 42 60 10M34 86C27 79 22 72 19 63m17 14c9-3 19-10 24-19M41 58c-6-6-8-13-8-18m12 8c6-2 12-6 17-11"/>' +
        '<path class="leaf-petiole" d="M33 101c0 5 1 9 3 13"/>'
      : '<path class="leaf-blade" fill="url(#' + gradientId + ')" d="M38 101C29 91 10 75 8 53 6 31 19 15 40 7c20 9 34 24 32 46-2 22-22 40-34 48Z"/>' +
        '<path class="leaf-highlight" d="M39 94c-7-17-21-32-22-49-1-13 7-25 20-33"/>' +
        '<path class="leaf-vein" d="M39 99c1-25 1-57 1-90M39 35C30 32 24 27 18 20m22 25c10-3 17-9 23-16M39 56c-10-4-18-10-25-19m25 31c10-4 18-11 26-20M39 78c-8-4-14-10-20-17m20 27c8-5 14-11 19-18"/>' +
        '<path class="leaf-petiole" d="M38 99c-1 6-3 10-6 14"/>';
    return '<svg viewBox="0 0 80 116" aria-hidden="true" focusable="false">' +
      '<defs><linearGradient id="' + gradientId + '" x1=".18" y1=".08" x2=".82" y2=".92" gradientUnits="objectBoundingBox">' +
      '<stop stop-color="' + colors[0] + '"/><stop offset=".52" stop-color="' + colors[1] + '"/><stop offset="1" stop-color="' + colors[2] + '"/></linearGradient></defs>' +
      artwork + '</svg>';
  }

  function makeParticle(kind) {
    var particle = document.createElement('span');
    particle.className = 'leaf-particle leaf-particle--' + kind;
    particle.setAttribute('aria-hidden', 'true');
    particle.innerHTML = makeSvg(kind === 'fall');
    document.body.appendChild(particle);
    return particle;
  }

  function addBurst(x, y, settings) {
    var particle = makeParticle('burst');
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.setProperty('--leaf-duration', settings.duration + 's');
    particle.style.setProperty('--leaf-start', settings.start + 'deg');
    particle.style.setProperty('--leaf-spin', settings.spin + 'deg');
    particle.style.setProperty('--leaf-burst-x', settings.burstX + 'px');
    particle.style.setProperty('--leaf-burst-y', settings.burstY + 'px');
    particle.addEventListener('animationend', function () { particle.remove(); }, { once: true });
  }

  function resetFall(leaf, y) {
    leaf.x = .12 + Math.random() * .76;
    leaf.y = y;
    leaf.speed = 42 + Math.random() * 30;
    leaf.phase = Math.random() * Math.PI * 2;
    leaf.sway = 26 + Math.random() * 48;
    leaf.frequency = 1.05 + Math.random() * .7;
    leaf.scale = .55 + Math.random() * .55;
    leaf.tilt = Math.random() * 100 - 50;
  }

  function animateLeaves(now) {
    var elapsed = lastFrame === null ? 0 : Math.min((now - lastFrame) / 1000, .05);
    lastFrame = now;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var count = width <= 680 ? 3 : 5;

    while (leaves.length > count) leaves.pop().element.remove();
    while (leaves.length < count) {
      var leaf = { element: makeParticle('fall') };
      resetFall(leaf, height * (leaves.length + .35) / count);
      leaves.push(leaf);
    }

    gust *= Math.exp(-elapsed * 3.6);
    leaves.forEach(function (leaf) {
      leaf.y += leaf.speed * (1 + gust * 2.4) * elapsed;
      leaf.phase += leaf.frequency * (1 + gust * 2.8) * elapsed;
      if (leaf.y > height + 48) resetFall(leaf, -48);

      var sway = Math.sin(leaf.phase);
      var x = leaf.x * width + sway * Math.min(leaf.sway, width * .15);
      var angle = leaf.tilt + sway * 38 + Math.sin(leaf.phase * 2) * (8 + gust * 19);
      var turn = Math.sin(leaf.phase * .82) * 61;
      var fade = Math.min(1, (leaf.y + 48) / 65, (height + 48 - leaf.y) / 80);
      leaf.element.style.opacity = .76 * fade;
      leaf.element.style.transform = 'translate3d(' + x + 'px,' + leaf.y + 'px,0)' +
        ' rotate(' + angle + 'deg) rotateY(' + turn + 'deg) scale(' + leaf.scale + ')';
    });
    window.requestAnimationFrame(animateLeaves);
  }

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    gust = Math.min(1, gust + Math.abs(scrollY - lastScrollY) / 180);
    lastScrollY = scrollY;
  }, { passive: true });
  window.requestAnimationFrame(animateLeaves);

  document.addEventListener('click', function (event) {
    if (event.button !== 0 || !(event.target instanceof Element)) return;
    if (!event.target.closest('a, button, [role="button"], summary, input[type="submit"]')) return;

    for (var i = 0; i < 3; i += 1) {
      var angle = (Math.PI * 2 * i / 3) + (Math.random() - .5) * .55;
      var distance = 30 + Math.random() * 26;
      addBurst(event.clientX - 10, event.clientY - 14, {
        duration: .85 + Math.random() * .25,
        start: -35 + Math.random() * 70,
        spin: -160 + Math.random() * 320,
        burstX: Math.cos(angle) * distance,
        burstY: Math.sin(angle) * distance - 12
      });
    }
  }, { passive: true });
})();
