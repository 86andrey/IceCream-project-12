(() => {
  const refs = {
    openModalHeaderBtn: document.querySelector('[data-modalHeader-open]'),
    closeModalHeaderBtn: document.querySelector('[data-modalHeader-close]'),
    modalHeader: document.querySelector('[data-modalHeader]'),
  };

  refs.openModalHeaderBtn.addEventListener('click', toggleModalHeader);
  refs.closeModalHeaderBtn.addEventListener('click', toggleModalHeader);

  function toggleModalHeader() {
    document.body.classList.toggle('modal-open');
    refs.modalHeader.classList.toggle('is-hidden');
  }
})();