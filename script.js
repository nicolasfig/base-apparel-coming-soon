const input = document.querySelector(".form__input");
const button = document.querySelector(".form__button");
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

button.addEventListener("click", () => {
  console.log("clicked");
});

const validation = () => {
  if (input.value === "") {
    console.log("Email cannot be empty");
  } else {
    input.innerHTML = "";
  }
  if (!pattern.test(input.value)) {
    console.log("Looks like this is not an email");
  } else {
    input.innerHTML = "";
  }
};
