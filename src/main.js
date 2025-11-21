import "./style.css";

const REQUIRED = ["username", "email", "password", "confirmPassword"];

const form = document.querySelector("form");
const submitBtn = form.querySelector('[type="submit"]');
const errorOutput = form.querySelector("output");

if (!form || !submitBtn || !errorOutput) {
  throw new Error("Registration form not found on the page.");
}

submitBtn.disabled = true;
errorOutput.textContent = "";

form.addEventListener("input", () => {
  const allFilled = REQUIRED.every((field) => form[field].value.trim() !== "");

  submitBtn.disabled = !allFilled;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (data.password !== data.confirmPassword) {
    errorOutput.textContent =
      "Passwords do not match. Please check and try again.";
  } else {
    errorOutput.textContent = "";
  }
});
