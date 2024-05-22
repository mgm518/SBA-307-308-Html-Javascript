const eye = document.getElementById("eye");
const toggleEye = document.getElementById("toggleEye");
const passwords = document.querySelectorAll("input[type=password]");

toggleEye.addEventListener("change", () => {
  eye.classList.toggle("fa-eye");
  eye.classList.toggle("fa-eye-slash");
  if (toggleEye.checked) {
    passwords.forEach(p => p.type = "text");
  } else {
    passwords.forEach((p) => (p.type = "password"));
  }
});
