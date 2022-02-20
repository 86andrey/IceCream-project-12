(() => {
  const refs = {
    openModalMapBtn: document.querySelector('[data-modalMap-open]'),
    closeModalMapBtn: document.querySelector('[data-modalMap-close]'),
    modalMap: document.querySelector('[data-modalMap]'),
  };

  refs.openModalMapBtn.addEventListener('click', toggleModalMap);
  refs.closeModalMapBtn.addEventListener('click', toggleModalMap);

  function toggleModalMap() {
    document.body.classList.toggle('modal-open');
    refs.modalMap.classList.toggle('is-hidden');
  }
})();