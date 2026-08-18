/* Hero parallax.
   Writes CSS custom properties on .hero; the stylesheet decides what each
   layer does with them, so this never clobbers the layout transforms
   (translateX(-50%) on the figure, translateY(-50%) on the type).

   Two independent effects, both driven through the same eased loop so
   nothing on a single element snaps while another part of it glides:

   - Pointer tilt (fine pointers only) — desktop mouse-move 3D lean.
   - Scroll drift (every device) — the headline and figure lag behind the
     page scroll, capped to a fixed pixel budget rather than a fraction of
     raw scrollY, so it can't run away on a long page and can't overshoot.

   Reduced-motion and hero-offscreen both zero everything out. */
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var finePointer = window.matchMedia('(pointer: fine)');

  // Every value drives through one lerp so a single element's transform never
  // mixes an eased component with an instantaneous one — that mismatch is
  // what reads as jitter, not the scroll input itself.
  var cur = { rx: 0, ry: 0, tx: 0, ty: 0, sHead: 0, sFig: 0 };
  var dest = { rx: 0, ry: 0, tx: 0, ty: 0, sHead: 0, sFig: 0 };
  var frame = null;
  var onscreen = true;

  var EASE = 0.09;
  var SCROLL_EASE = 0.10; // a bit heavier than the pointer ease — reinforces the "slower" feel
  var SETTLED = 0.01;

  // Total drift budget in px, reached once the hero has fully scrolled past —
  // capped, so it can never exceed this regardless of page length. Headline
  // is the deliberately dramatic one: at a ~750-900px hero height, 320px of
  // cancellation means it nets out moving at well under half page speed.
  var HEAD_DRIFT = 320;
  var FIG_DRIFT = 32;

  function paint() {
    var moving = false;
    for (var k in dest) {
      var ease = (k === 'sHead' || k === 'sFig') ? SCROLL_EASE : EASE;
      var d = dest[k] - cur[k];
      if (Math.abs(d) > SETTLED) { cur[k] += d * ease; moving = true; }
      else { cur[k] = dest[k]; }
    }
    hero.style.setProperty('--rx', cur.rx.toFixed(3) + 'deg');
    hero.style.setProperty('--ry', cur.ry.toFixed(3) + 'deg');
    hero.style.setProperty('--tx', cur.tx.toFixed(2) + 'px');
    hero.style.setProperty('--ty', cur.ty.toFixed(2) + 'px');
    hero.style.setProperty('--sy', cur.sHead.toFixed(2) + 'px');
    hero.style.setProperty('--sf', cur.sFig.toFixed(2) + 'px');
    frame = moving ? requestAnimationFrame(paint) : null;
  }

  function nudge() {
    if (frame === null) frame = requestAnimationFrame(paint);
  }

  /* ---- desktop: follow the pointer --------------------------------------- */
  function onPointerMove(e) {
    if (!onscreen || !finePointer.matches) return;
    var r = hero.getBoundingClientRect();
    var px = (e.clientX - r.left) / r.width * 2 - 1;
    var py = (e.clientY - r.top) / r.height * 2 - 1;
    px = Math.max(-1, Math.min(1, px));
    py = Math.max(-1, Math.min(1, py));

    dest.ry = px * 4;
    dest.rx = -py * 2.5;
    dest.tx = px * 7.5;
    dest.ty = py * 4.5;
    nudge();
  }

  function onPointerLeave() {
    dest.rx = dest.ry = dest.tx = dest.ty = 0;
    nudge();
  }

  /* ---- scroll: headline + figure lag behind, capped -------------------- */
  // Layout is read once per animation frame here, not once per 'scroll'
  // event — reading getBoundingClientRect() straight out of the scroll
  // handler forces a synchronous layout on every event during a fling,
  // which is its own source of visible stutter on mobile.
  var scrollQueued = false;
  function readScroll() {
    scrollQueued = false;
    if (!hero.isConnected) return;
    var r = hero.getBoundingClientRect();
    // 0 at the top of the hero's transit, 1 once it has fully scrolled by
    var progress = Math.max(0, Math.min(1, -r.top / (r.height || 1)));
    dest.sHead = progress * HEAD_DRIFT;
    dest.sFig = progress * FIG_DRIFT;
    nudge();
  }
  function onScroll() {
    if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(readScroll); }
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
      readScroll();
    }
    if (!wantScroll && boundScroll) {
      window.removeEventListener('scroll', onScroll);
      boundScroll = false;
      dest.sHead = dest.sFig = 0;
      nudge();
    }

    if (reduceMotion.matches) {
      dest.rx = dest.ry = dest.tx = dest.ty = dest.sHead = dest.sFig = 0;
      nudge();
    }
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      onscreen = entries[0].isIntersecting;
      if (!onscreen && boundPointer) onPointerLeave();
    }, { threshold: 0 }).observe(hero);
  }

  ['change'].forEach(function (evt) {
    if (finePointer.addEventListener) finePointer.addEventListener(evt, bind);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener(evt, bind);
  });

  hero.classList.add('hero--parallax');
  bind();

  /* ---- intro reveal: fades and rises into place as it enters view ------- */
  var intro = document.getElementById('intro');
  if (intro && !reduceMotion.matches) {
    intro.classList.add('reveal-in');
    if ('IntersectionObserver' in window) {
      var introObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            introObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
      introObserver.observe(intro);
    } else {
      intro.classList.add('is-in');
    }
  }
})();
