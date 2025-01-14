const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeModalBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});
