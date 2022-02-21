(() => {
    const refs = {
      openModalBuyBtn: document.querySelector('[data-modalBuy-open]'),
      closeModalBuyBtn: document.querySelector('[data-modalBuy-close]'),
      modalBuy: document.querySelector('[data-modalBuy]'),
    };
  
    refs.openModalBuyBtn.addEventListener('click', toggleModalBuy);
    refs.closeModalBuyBtn.addEventListener('click', toggleModalBuy);
  
    function toggleModalBuy() {
      document.body.classList.toggle('modal-open');
      refs.modalBuy.classList.toggle('is-hidden');
    }
  })();