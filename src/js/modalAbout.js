(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalAbout-open]'),
    closeModalBtn: document.querySelector('[data-modalAbout-close]'),
    modal: document.querySelector('[data-modalAbout]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();