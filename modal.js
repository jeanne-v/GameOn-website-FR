function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalForm = document.getElementById("modal-form");
const formData = document.querySelectorAll(".formData");
const inputs = Array.from(
  document.forms["reserve"].getElementsByTagName("input")
);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

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

  inputs.forEach((input) => {
    if (validateInput(input) === false) {
      isFormValid = false;
      input.parentElement.classList.add("error");
    }
  });

  if (isFormValid) {
    showModalFormConfirmation();
  }
});

function validateInput(input) {
  if (input.type === "text") {
    if (input.value.trim() === "" || input.value.trim().length < 2) {
      return false;
    }
  } else if (input.type === "email") {
    const regexp = /^[a-z0-9.-_]+@[a-z0-9-]+\.[a-z]{2,}$/;
    if (!regexp.test(input.value)) {
      return false;
    }
  } else if (input.type === "date" && input.value === "") {
    return false;
  } else if (input.type === "number") {
    if (input.value === "" || isNaN(input.value)) {
      return false;
    }
  } else if (input.type === "radio") {
    if (!document.querySelector(`input[name="${input.name}"]:checked`)) {
      return false;
    }
  } else if (input.id === "checkbox1" && !input.checked) {
    return false;
  }
  return true;
}

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (
      input.parentElement.classList.contains("error") &&
      validateInput(input)
    ) {
      input.parentElement.classList.remove("error");
    }
  });
});

function showModalFormConfirmation() {
  document.querySelector(
    ".modal-body"
  ).innerHTML = `<div class='modal-confirmation'><p>Merci pour 
<span>votre inscription</span></p><button class="btn-close" id="modal-confirmation-close-btn">Fermer</button></div>`;
}
