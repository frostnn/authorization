import { authFB } from "../js/main";

export const singUp = (data) => {
  const userData = [...data];
  const [mail, pass] = userData;
  authFB
    .createUserWithEmailAndPassword(mail, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Registr:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
