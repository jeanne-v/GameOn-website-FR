const modalForm = document.getElementById("modal-form");
const formData = document.querySelectorAll(".formData");
const inputs = Array.from(
  document.forms["reserve"].getElementsByTagName("input")
);

// modal form submit event
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isFormValid = true;

  // check each form input
  inputs.forEach((input) => {
    if (validateModalInput(input) === false) {
      isFormValid = false;
      input.parentElement.classList.add("error");
    }
  });

  if (isFormValid) {
    showModalFormConfirmation();
  }
});

function validateModalInput(input) {
  if (input.name === "first-name" || input.name === "last-name") {
    return checkIfTextInputValueIsMinLength(input, 2);
  } else if (input.type === "email") {
    return checkEmailInputValidity(input);
  } else if (input.name === "birthdate") {
    return checkIfInputValueIsNotEmpty(input);
  } else if (input.name === "quantity") {
    return checkIfInputValueIsANumber(input);
  } else if (input.name === "location") {
    return checkIfRadioGroupHasCheckedRadio(input);
  } else if (input.name === "checkbox1") {
    return checkIfCheckboxIsChecked(input);
  }
  return true;
}

// remove error style if input is corrected
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (
      input.parentElement.classList.contains("error") &&
      validateModalInput(input)
    ) {
      input.parentElement.classList.remove("error");
    }
  });
});

// show form confirmation message
function showModalFormConfirmation() {
  document.querySelector(
    ".modal-body"
  ).innerHTML = `<div class='modal-confirmation'><p>Merci pour 
  <span>votre inscription</span></p><button class="btn-close" id="modal-confirmation-close-btn">Fermer</button></div>`;
}
