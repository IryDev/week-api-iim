const form = document.getElementById("form");

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

function checkEmail() {
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  if (!isValidEmail(emailValue)) {
    showError(email, "Please enter a valid email address.");
  } else {
    hideError(email);
  }
}

function isValidEmail(email) {
  // Basic email validation, you can use a more sophisticated regex if needed
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail();
});

form.addEventListener("input", function (e) {
  const inputs = document.querySelectorAll(
    "input[type=text], input[type=email]"
  );
  inputs.forEach(function (input) {
    input.classList.remove("error");
    input.nextElementSibling.style.display = "none";
  });
});
