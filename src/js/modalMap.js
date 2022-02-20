(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalMap-open]'),
    closeModalBtn: document.querySelector('[data-modalMap-close]'),
    modal: document.querySelector('[data-modalMap]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();