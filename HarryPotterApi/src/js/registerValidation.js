const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  input.classList.add("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideError(input) {
  const errorElement = input.nextElementSibling;
  input.classList.remove("error");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

function checkUsername() {
  const username = document.getElementById("username");
  const usernameValue = username.value.trim();
  usernameValue === "" ? showError(username, "Username cannot be blank") : hideError(username);
}

function checkEmail() {
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  !isValidEmail(emailValue) ? showError(email, "Must be a valid email format") : hideError(email);
}

function checkPassword() {
  const password = document.getElementById("password");
  const passwordValue = password.value.trim();

  const requirements = document.querySelector(".password-requirements");
  const conditions = [
    {
      element: document.querySelector(".requirement1"),
      condition: passwordValue.length < 8,
    },
    {
      element: document.querySelector(".requirement2"),
      condition: !/(?=.*\d)/.test(passwordValue),
    },
    {
      element: document.querySelector(".requirement3"),
      condition: !/(?=.*[a-z])(?=.*[A-Z])/.test(passwordValue),
    },
    {
      element: document.querySelector(".requirement4"),
      condition: !/(?=.*[!@#$%^&*])/.test(passwordValue),
    },
  ];

  let isError = false;

  conditions.forEach(({ element, condition }) => {
    if (condition) {
      element.classList.add("fail");
      isError = true;
    } else {
      element.classList.remove("fail");
    }
  });

  if (isError) {
    password.classList.add("error");
    requirements.style.display = "block";
  } else {
    password.classList.remove("error");
  }
}

function checkConfirmPassword() {
  const confirmPassword = document.getElementById("confirm-password");
  const confirmPasswordValue = confirmPassword.value.trim();
  const password = document.getElementById("password").value.trim();
  if (confirmPasswordValue === "") {
    showError(confirmPassword, "Please confirm your password");
  } else if (confirmPasswordValue !== password) {
    showError(confirmPassword, "Passwords do not match");
  } else {
    hideError(confirmPassword);
  }
}

function isValidEmail(email) {
  // Basic email validation, you can use a more sophisticated regex if needed
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkUsername();
  checkEmail();
  checkPassword();
  checkConfirmPassword();
});

username.addEventListener("input", checkUsername);
email.addEventListener("input", checkEmail);
password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkConfirmPassword);
