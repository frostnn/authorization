const showPassword = () => {
  const password = document.querySelector("#password");
  const eye = document.querySelector(".fa-eye-slash");
  eye.addEventListener("click", () => {
    if (password.attributes.type.value == "password") {
      password.setAttribute("type", "text");
    } else if (password.attributes.type.value == "text") {
      password.setAttribute("type", "password");
    }
    eye.classList.toggle("active");
  });
};

export default showPassword;
