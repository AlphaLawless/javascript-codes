function StartModal(modalId) {
  if (localStorage.exitModal !== modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("show-modal");
      modal.addEventListener("click", (e) => {
        if (e.target.id == modalId || e.target.className == "exit") {
          modal.classList.remove("show-modal");
          localStorage.exitModal = modalId;
        }
      });
    }
  }
}

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => StartModal("modal-promotion"));

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    StartModal("modal-promotion");
  }
});
