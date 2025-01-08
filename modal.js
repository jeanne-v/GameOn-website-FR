const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
document.addEventListener("click", (e) => {
  if (e.target.id === "close-modal-btn") {
    modalbg.style.display = "none";
  }
});
