const inputPassword = document.getElementById("password");

const togglePassword = document.querySelector(".eye");

togglePassword.addEventListener("click", function (e) {
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
  togglePassword.classList.toggle("active");
  togglePassword.src = togglePassword.src.includes("show")
    ? "../../src/assets/icons/hide.png"
    : "../../src/assets/icons/show.png";
});

// if password confirm exists, add event listener

try {
  const inputConfirmPassword = document.getElementById("confirm-password");
  const eye2 = document.querySelector(".eye2");
} catch (error) {
  console.log("No confirm password input found");
} finally {
  const inputConfirmPassword = document.getElementById("confirm-password");
  const eye2 = document.querySelector(".eye2");
  eye2.addEventListener("click", function (e) {
    inputConfirmPassword.type =
      inputConfirmPassword.type === "password" ? "text" : "password";
    eye2.classList.toggle("active");
    eye2.src = eye2.src.includes("show")
      ? "../../src/assets/icons/hide.png"
      : "../../src/assets/icons/show.png";
  });
}
