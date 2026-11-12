/* A single soft leaf drifts by occasionally during active scrolling. */
(function () {
  var topbar = document.querySelector('.topbar');
  function updateTopbar() {
    if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  updateTopbar();
  window.addEventListener('scroll', updateTopbar, { passive: true });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var leaf = document.createElement('span');
  leaf.className = 'scroll-leaf';
  leaf.setAttribute('aria-hidden', 'true');
  leaf.innerHTML = '<svg viewBox="0 0 24 32" fill="none"><path d="M20.5 3C11 3.7 5.2 8.2 4.8 16c-.2 4.3 2.2 7.3 5.3 7.4 6.8.1 11-8.5 10.4-20.4Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.7 23 17.8 8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>';
  document.body.appendChild(leaf);

  var nextFall = 0;
  var resetTimer;
  window.addEventListener('scroll', function () {
    var now = Date.now();
    if (now < nextFall) return;
    nextFall = now + 2400;
    window.clearTimeout(resetTimer);
    leaf.classList.remove('is-falling');
    void leaf.offsetWidth;
    leaf.classList.add('is-falling');
    resetTimer = window.setTimeout(function () {
      leaf.classList.remove('is-falling');
    }, 1900);
  }, { passive: true });
})();
