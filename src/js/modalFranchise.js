(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modalFranchise-open]'),
    closeModalBtn: document.querySelector('[data-modalFranchise-close]'),
    modal: document.querySelector('[data-modalFranchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();