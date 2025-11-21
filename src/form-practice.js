const REQUIRED = ["name", "email", "message"];

const form = document.querySelector("form");
const result = document.querySelector("#result");
const submitBtn = form.querySelector('[type="submit"]');

submitBtn.disabled = true;

form.addEventListener("input", () => {
  const allFilled = REQUIRED.every((field) => form[field].value.trim() !== "");

  submitBtn.disabled = !allFilled;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  result.innerHTML = Results(data);
});

function Results(data) {
  return `
    <ul class="space-y-1 text-sm">
      ${Object.entries(data)
        .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
        .join("")}
    </ul>
  `;
}
