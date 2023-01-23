const input = document.querySelector(".form__input");
const button = document.querySelector(".form__button");
const error = document.querySelector(".error_msg");
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const validation = () => {
  if (input.value === "") {
    input.placeholder = "Email cannot be empty";
    error.classList.toggle("hidden");
    error.innerHTML = "Email cannot be empty";
  } else if (!pattern.test(input.value)) {
    console.log("Looks like this is not an email");
    input.placeholder = "";
    error.classList.toggle("hidden");
    error.innerHTML = "Looks like this is not an email";
  } else {
    input.innerHTML = "";
  }
};

button.addEventListener("click", () => {
  validation();
});
