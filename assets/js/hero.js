/* Hero parallax.
   Writes four CSS custom properties on .hero; the stylesheet decides what each
   layer does with them, so this never clobbers the layout transforms
   (translateX(-50%) on the figure, translateY(-50%) on the type).

   Desktop  — pointer position drives rotation + translation.
   Touch    — scroll position drives a gentler tilt, so there is no permission
              prompt and nothing depends on the gyroscope.
   Neither runs when the hero is offscreen or reduced motion is requested. */
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(pointer: fine)');

  // current + target values, lerped toward each other each frame
  // pointer values ease toward their target; scroll values track 1:1, because
  // easing a scroll-linked offset makes the page feel like it is on elastic
  var cur = { rx: 0, ry: 0, tx: 0, ty: 0 };
  var dest = { rx: 0, ry: 0, tx: 0, ty: 0 };
  var scrollOffset = { sy: 0, sf: 0 };
  var frame = null;
  var onscreen = true;

  var EASE = 0.09;
  var SETTLED = 0.01;

  function paint() {
    var moving = false;
    for (var k in dest) {
      var d = dest[k] - cur[k];
      if (Math.abs(d) > SETTLED) { cur[k] += d * EASE; moving = true; }
      else { cur[k] = dest[k]; }
    }
    hero.style.setProperty('--rx', cur.rx.toFixed(3) + 'deg');
    hero.style.setProperty('--ry', cur.ry.toFixed(3) + 'deg');
    hero.style.setProperty('--tx', cur.tx.toFixed(2) + 'px');
    hero.style.setProperty('--ty', cur.ty.toFixed(2) + 'px');
    hero.style.setProperty('--sy', scrollOffset.sy.toFixed(2) + 'px');
    hero.style.setProperty('--sf', scrollOffset.sf.toFixed(2) + 'px');
    frame = moving ? requestAnimationFrame(paint) : null;
  }

  function nudge() {
    if (frame === null) frame = requestAnimationFrame(paint);
  }

  /* ---- desktop: follow the pointer ------------------------------------- */
  function onPointerMove(e) {
    if (!onscreen) return;
    var r = hero.getBoundingClientRect();
    // -1 .. 1 from the centre of the hero
    var px = (e.clientX - r.left) / r.width * 2 - 1;
    var py = (e.clientY - r.top) / r.height * 2 - 1;
    px = Math.max(-1, Math.min(1, px));
    py = Math.max(-1, Math.min(1, py));

    dest.ry = px * 4;     // yaw follows horizontal travel
    dest.rx = -py * 2.5;    // pitch inverted so it leans toward the cursor
    dest.tx = px * 7.5;
    dest.ty = py * 4.5;
    nudge();
  }

  function onPointerLeave() {
    dest.rx = dest.ry = dest.tx = dest.ty = 0;
    nudge();
  }

  /* ---- touch: drive it from scroll instead ------------------------------ */
  // Scroll parallax runs on every device: the headline is furthest "back", so
  // it travels up more slowly than the page — positive translate cancels part
  // of the scroll. The figure lags a little less. Both are written as separate
  // vars so the pointer tilt above can compose with them.
  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    scrollOffset.sy = y * 0.45;   // headline holds back the most
    scrollOffset.sf = y * 0.18;   // figure drifts a touch

    if (!finePointer.matches && onscreen) {
      // touch devices get their tilt from scroll instead of a pointer
      var r = hero.getBoundingClientRect();
      var p = Math.max(-1, Math.min(1, -r.top / (r.height || 1)));
      dest.rx = p * 9;
      dest.ry = 0;
      dest.tx = 0;
      dest.ty = p * -10;
    }
    nudge();
  }

  var boundPointer = false;
  var boundScroll = false;

  function bind() {
    var wantPointer = finePointer.matches && !reduceMotion.matches;
    var wantScroll = !reduceMotion.matches;

    if (wantPointer && !boundPointer) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      hero.addEventListener('pointerleave', onPointerLeave, { passive: true });
      boundPointer = true;
    }
    if (!wantPointer && boundPointer) {
      window.removeEventListener('pointermove', onPointerMove);
      hero.removeEventListener('pointerleave', onPointerLeave);
      boundPointer = false;
      onPointerLeave();
    }

    if (wantScroll && !boundScroll) {
      window.addEventListener('scroll', onScroll, { passive: true });
      boundScroll = true;
      onScroll();
    }
    if (!wantScroll && boundScroll) {
      window.removeEventListener('scroll', onScroll);
      boundScroll = false;
    }

    if (reduceMotion.matches) {
      dest.rx = dest.ry = dest.tx = dest.ty = 0;
      nudge();
    }
  }

  // stop reacting once the hero has scrolled out of view
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      onscreen = entries[0].isIntersecting;
      if (!onscreen && boundPointer) onPointerLeave();
    }, { threshold: 0 }).observe(hero);
  }

  // re-evaluate if the user plugs in a mouse or flips the motion preference
  ['change'].forEach(function (evt) {
    if (finePointer.addEventListener) finePointer.addEventListener(evt, bind);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener(evt, bind);
  });

  hero.classList.add('hero--parallax');
  bind();
})();
