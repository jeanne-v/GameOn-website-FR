// check if given text input value is at least given number long
function checkIfTextInputValueIsMinLength(input, minLength) {
  if (input.value.trim() === "" || input.value.trim().length < minLength) {
    return false;
  }
  return true;
}

// check if input value is a valid email address
function checkIfInputValueIsAValidEmail(input) {
  const regexp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!regexp.test(input.value)) {
    return false;
  }
  return true;
}

// check if there is a selected input in radio group to which given input belongs
function checkIfRadioGroupHasCheckedRadio(input) {
  if (!document.querySelector(`input[name="${input.name}"]:checked`)) {
    return false;
  }
  return true;
}

// check if checkbox is checked
function checkIfCheckboxIsChecked(input) {
  return input.checked;
}

// check if input value isn't empty
function checkIfInputValueIsNotEmpty(input) {
  if (input.value.trim("") === "") {
    return false;
  }
  return true;
}

// check if input value is a number
function checkIfInputValueIsANumber(input) {
  if (input.value === "" || isNaN(input.value)) {
    return false;
  }
  return true;
}
