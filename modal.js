const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalForm = document.getElementById("modal-form");
const formData = document.querySelectorAll(".formData");
const inputs = Array.from(document.forms["reserve"].getElementsByTagName("input"));

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal
function launchModal() {
  modalbg.style.display = "block";
  if (modalForm.style.display === "none") {
    resetModalContent();
  }
}

// close modal
document.addEventListener("click", (e) => {
  if (
    e.target.id === "close-modal-btn" ||
    e.target.id === "modal-confirmation-close-btn"
  ) {
    modalbg.style.display = "none";
  }
});

// modal form submit event
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  // check each form input
  inputs.forEach((input) => {
    if (checkModalInputError(input)) {
      isFormValid = false;
      input.parentElement.dataset.errorVisible = "true";
      input.parentElement.dataset.error = checkModalInputError(input);
    }
  });

  //   if no input returns an error message
  if (isFormValid) {
    // reset form and hide it
    modalForm.reset();
    modalForm.style.display = "none";
    showModalFormConfirmation();
  }
});

// check if user input is not valid; if not valid return error message, else return null
function checkModalInputError(input) {
  if (input.name === "first-name" && !checkIfTextInputValueIsMinLength(input, 2)) {
    return "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  } else if (input.name === "last-name" && !checkIfTextInputValueIsMinLength(input, 2)) {
    return "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  } else if (input.type === "email" && !checkIfInputValueIsAValidEmail(input)) {
    return "Vous devez entrer une adresse email valide";
  } else if (input.name === "birthdate" && !checkIfInputValueIsNotEmpty(input)) {
    return "Vous devez entrer votre date de naissance.";
  } else if (input.name === "quantity" && !checkIfInputValueIsANumber(input)) {
    return "Vous devez entrer un nombre";
  } else if (input.name === "location" && !checkIfRadioGroupHasCheckedRadio(input)) {
    return "Vous devez choisir une option.";
  } else if (input.name === "checkbox1" && !checkIfCheckboxIsChecked(input)) {
    return "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
  return null;
}

// remove error style if input is corrected
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (
      input.parentElement.dataset.errorVisible === "true" &&
      !checkModalInputError(input)
    ) {
      input.parentElement.dataset.errorVisible = "false";
    }
  });
});

// show form confirmation message
function showModalFormConfirmation() {
  document.querySelector(
    ".modal-body > div"
  ).innerHTML = `<div class='modal-confirmation'><p>Merci pour
  <span>votre inscription</span></p><button class="btn-close" id="modal-confirmation-close-btn">Fermer</button></div>`;
}

// reinitialize modal content
function resetModalContent() {
  modalForm.style.display = "block";
  document.querySelector(".modal-body > div").innerHTML = "";
}
