const getValidationData = () => {
  password.addEventListener("input", () => {
    if (
      email.value &&
      password.value &&
      email.value.length > 3 &&
      password.value.length > 5
    ) {
      submit.disabled = false;
      submit.classList.remove("btn_close");
    } else {
      submit.disabled = true;
      submit.classList.add("btn_close");
    }
  });
};

export default getValidationData;
