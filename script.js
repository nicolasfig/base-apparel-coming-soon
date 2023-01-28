const input = document.querySelector(".form__input");
const button = document.querySelector(".form__button");
const error = document.querySelector(".error_msg");
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// review form validation
const validation = () => {
  if (input.value === "") {
    input.placeholder = "";
    error.classList.toggle("hidden");
    error.innerHTML = "Email cannot be empty";
  } else if (!pattern.test(input.value)) {
    input.placeholder = "";
    error.classList.toggle("hidden");
    error.innerHTML = "Looks like this is not an email";
  } else if (error.classList.contains("hidden")) {
    input.innerHTML = "";
    error.classList.toggle("hidden");
  }
};

button.addEventListener("click", () => {
  validation();
});
