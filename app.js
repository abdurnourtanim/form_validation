const form_one = document.getElementById("form_one");
const form_two = document.getElementById("form_two");
const form_three = document.getElementById("form_three");
const list = document.querySelector(".list");

// form one
const form_one_next = form_one.querySelector("input[type='submit']");
form_one_next.addEventListener("click", (e) => {
  e.preventDefault();
  let first_name = form_one.querySelector("#first_name");
  let last_name = form_one.querySelector("#last_name");

  if (first_name.value && last_name.value) {
    first_name.classList.add("success");
    last_name.classList.add("success");
    form_one.classList.add("hide_form");
    form_two.classList.remove("hide_form");
  } else if (first_name.value) {
    first_name.classList.add("success");
    last_name.classList.add("required");
  } else if (last_name.value) {
    first_name.classList.add("required");
    last_name.classList.add("success");
  } else {
    first_name.classList.add("required");
    last_name.classList.add("required");
  }
});

// form two
const form_two_previous = form_two.querySelectorAll("input[type='submit']")[0];
form_two_previous.addEventListener("click", (e) => {
  e.preventDefault();
  form_two.classList.add("hide_form");
  form_one.classList.remove("hide_form");
});

const form_two_next = form_two.querySelectorAll("input[type='submit']")[1];
form_two_next.addEventListener("click", (e) => {
  e.preventDefault();
  // form_two.classList.add("hide_form");
  // form_three.classList.remove("hide_form");

  let mobile_number = form_two.querySelector("#mobile_number");
  let country = form_two.querySelector("select");

  if (mobile_number.value.length > 10 && country.value !== "Select") {
    mobile_number.classList.add("success");
    country.classList.add("success");

    form_two.classList.add("hide_form");
    form_three.classList.remove("hide_form");
  } else if (mobile_number.value.length < 10) {
    mobile_number.classList.add("required");
  } else if (country.value === "Select") {
    country.classList.add("required");
  } else {
    mobile_number.classList.add("required");
    country.classList.add("required");
  }
});

// form three
const form_three_previous = form_three.querySelectorAll(
  "input[type='submit']"
)[0];
form_three_previous.addEventListener("click", (e) => {
  e.preventDefault();
  form_three.classList.add("hide_form");
  form_two.classList.remove("hide_form");
});

const form_three_done = form_three.querySelectorAll("input[type='submit']")[1];
form_three_done.addEventListener("click", (e) => {
  e.preventDefault();

  let email = form_three.querySelector("#email");
  let password = form_three.querySelector("#password");
  let password_confirm = form_three.querySelector("#password_confirm");

  if (
    email.value &&
    password.value === password_confirm.value &&
    password.value.length > 7
  ) {
    window.open("Congratulation.html", "_self");

    email.classList.add("success");
    password.classList.add("success");
    password_confirm.classList.add("success");
  } else if (email.value) {
    email.classList.add("success");
    password.classList.add("required");
    password_confirm.classList.add("required");
  } else if (password.value === password_confirm.value && password.length > 7) {
    password.classList.add("success");
    password_confirm.classList.add("success");
    email.classList.add("required");
  } else {
    email.classList.add("required");
    password.classList.add("required");
    password_confirm.classList.add("required");
  }
});
