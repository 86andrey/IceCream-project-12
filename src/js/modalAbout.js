(() => {
  const refs = {
    openModalAboutBtn: document.querySelector('[data-modalAbout-open]'),
    closeModalAboutBtn: document.querySelector('[data-modalAbout-close]'),
    modalAbout: document.querySelector('[data-modalAbout]'),
  };

  refs.openModalAboutBtn.addEventListener('click', toggleModalAbout);
  refs.closeModalAboutBtn.addEventListener('click', toggleModalAbout);

  function toggleModalAbout() {
    document.body.classList.toggle('modal-open');
    refs.modalAbout.classList.toggle('is-hidden');
  }
})();