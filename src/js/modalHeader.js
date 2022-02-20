(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalHeader-open]'),
    closeModalBtn: document.querySelector('[data-modalHeader-close]'),
    modal: document.querySelector('[data-modalHeader]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();