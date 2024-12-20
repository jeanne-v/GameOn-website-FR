function checkIfTextInputValueIsMinLength(input, minLength) {
  if (input.value.trim() === "" || input.value.trim().length < minLength) {
    return false;
  }
  return true;
}

function checkEmailInputValidity(input) {
  const regexp = /^[a-z0-9.-_]+@[a-z0-9-]+\.[a-z]{2,}$/;
  if (!regexp.test(input.value)) {
    return false;
  }
  return true;
}

function checkIfRadioGroupHasCheckedRadio(input) {
  if (!document.querySelector(`input[name="${input.name}"]:checked`)) {
    return false;
  }
  return true;
}

function checkIfCheckboxIsChecked(input) {
  return input.checked;
}

function checkIfInputValueIsNotEmpty(input) {
  if (input.value.trim("") === "") {
    return false;
  }
  return true;
}

function checkIfInputValueIsANumber(input) {
  if (input.value === "" || isNaN(input.value)) {
    return false;
  }
  return true;
}
