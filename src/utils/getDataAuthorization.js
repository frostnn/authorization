import getValidationData from "./getValidationData";
import { fb } from "./root";

const getDataAuthorization = () => {
  const password = document.querySelector("#password");
  const email = document.querySelector("#email");
  const submit = document.querySelector("#submit");
  submit.disabled = true;
  submit.classList.add("btn_close");
  submit.addEventListener("click", () => {
    if (email.value && password.value) {
      const set = new Set();
      set.add(email.value);
      set.add(password.value);
      fb(set);
      email.value = "";
      password.value = "";
      submit.disabled = true;
      submit.classList.add("btn_close");
    }
  });
  getValidationData();
};

export default getDataAuthorization;
