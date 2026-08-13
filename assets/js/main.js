(function () {
  var openTrigger = null;

  function openModal(id) {
    var modal = document.getElementById('modal-' + id);
    if (!modal) return;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-container').classList.add('modal-enter');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = 'unset';
    if (openTrigger) {
      openTrigger.focus();
      openTrigger = null;
    }
  }

  function closeAllModals() {
    document.querySelectorAll('[data-modal].is-open').forEach(closeModal);
  }

  document.querySelectorAll('[data-modal-target]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openTrigger = trigger;
      openModal(trigger.getAttribute('data-modal-target'));
    });
  });

  document.querySelectorAll('[data-modal]').forEach(function (modal) {
    modal.querySelectorAll('[data-modal-close]').forEach(function (closer) {
      closer.addEventListener('click', function () {
        closeModal(modal);
      });
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllModals();
  });
})();
