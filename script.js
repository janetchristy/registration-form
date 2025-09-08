const form = document.getElementById('registrationform');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitbtn');

// Create error elements
const nameError = document.createElement('span');
nameError.classList.add('error');
nameInput.parentNode.appendChild(nameError);

const emailError = document.createElement('span');
emailError.classList.add('error');
emailInput.parentNode.appendChild(emailError);

const passwordError = document.createElement('span');
passwordError.classList.add('error');
passwordInput.parentNode.appendChild(passwordError);

// Validate functions
function validateName() {
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email address';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.trim().length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    return false;
  } else {
    passwordError.textContent = '';
    return true;
  }
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  submitBtn.disabled = !(isNameValid && isEmailValid && isPasswordValid);
}

// Event listeners for real-time validation
nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Optional: validate on blur as well
nameInput.addEventListener('blur', validateForm);
emailInput.addEventListener('blur', validateForm);
passwordInput.addEventListener('blur', validateForm);

// Validate once when the page loads
validateForm();

// Handle form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateName() && validateEmail() && validatePassword()) {
    alert('Form submitted successfully!');
    form.reset();
    validateForm();
  }
});
