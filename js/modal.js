(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector(".backdrop"),
  };

  refs.backdrop.addEventListener("click", modalCloseHandler);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    window.addEventListener("keydown", onEscPress);
    
    if (!refs.modal.classList.contains("is-hidden")) {
      window.addEventListener("keydown", onEscPress);
    } else {
      window.removeEventListener("keydown", onEscPress);
    }
  }

  function modalCloseHandler(event) {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  }

  function onEscPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const IsEscKey = event.code === ESC_KEY_CODE;

    if (IsEscKey) {
      toggleModal();
    }
  }
})();
