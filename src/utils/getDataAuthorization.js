import getValidationData from "./getValidationData";
import { singIn } from "./singIn";
import { singUp } from "./singUp";

export const getDataAuthorization = () => {
  const password = document.querySelector("#password");
  const email = document.querySelector("#email");
  const submit = document.querySelector("#submit");
  submit.disabled = true;
  submit.classList.add("btn_close");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value && password.value) {
      const set = new Set();
      set.add(email.value);
      set.add(password.value);
      singIn(set);
      email.value = "";
      password.value = "";
      submit.disabled = true;
      submit.classList.add("btn_close");
    }
  });
  getValidationData();
};

export const getDataRegirst = () => {
  const password = document.querySelector("#password_sing_up2");
  const email = document.querySelector("#email_sing_up");
  const submit = document.querySelector("#submit_up");
  /* submit.disabled = true; */
  /* submit.classList.add("btn_close"); */
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value && password.value) {
      const set = new Set();
      set.add(email.value);
      set.add(password.value);
      singUp(set);
      email.value = "";
      password.value = "";
      /* submit.disabled = true; */
      /* submit.classList.add("btn_close"); */
    }
  });
};
