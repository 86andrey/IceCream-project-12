(() => {
  const refs = {
    openModalFranchiseBtn: document.querySelector('[data-modalFranchise-open]'),
    closeModalFranchiseBtn: document.querySelector('[data-modalFranchise-close]'),
    modalFranchise: document.querySelector('[data-modalFranchise]'),
  };

  refs.openModalFranchiseBtn.addEventListener('click', toggleModalFranchise);
  refs.closeModalFranchiseBtn.addEventListener('click', toggleModalFranchise);

  function toggleModalFranchise() {
    document.body.classList.toggle('modal-open');
    refs.modalFranchise.classList.toggle('is-hidden');
  }
})();