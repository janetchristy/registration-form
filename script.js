const form = document.getElementById('registrationform');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitbtn');

// Helper function to show error
function showError(input, message) {
  let error = input.nextElementSibling;
  if (!error || !error.classList.contains('error')) {
    error = document.createElement('span');
    error.classList.add('error');
    input.parentNode.appendChild(error);
  }
  error.textContent = message;
}

// Helper function to remove error
function removeError(input) {
  let error = input.nextElementSibling;
  if (error && error.classList.contains('error')) {
    error.textContent = '';
  }
}

// Validation functions
function validateName() {
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    return false;
  } else {
    removeError(nameInput);
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, 'Invalid email address');
    return false;
  } else {
    removeError(emailInput);
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, 'Password must be at least 6 characters');
    return false;
  } else {
    removeError(passwordInput);
    return true;
  }
}

// Event listeners for real-time validation on focus/blur
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);

// Optional: remove error when user starts typing
nameInput.addEventListener('input', removeError.bind(null, nameInput));
emailInput.addEventListener('input', removeError.bind(null, emailInput));
passwordInput.addEventListener('input', removeError.bind(null, passwordInput));

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    alert('Registration Successful!');
    form.reset();
  }
});
