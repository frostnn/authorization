import Admin from "../js/components/Admin/Admin";
import { authFB } from "../js/main";
import { authContent } from "./root";

export const singIn = (data) => {
  const userData = [...data];
  const [mail, pass] = userData;
  authFB
    .signInWithEmailAndPassword(mail, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Enter:", user);

      Admin(authFB.currentUser);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  /* let id = Math.floor(1000 + Math.random() * (1000 + 1 - 1));
  db.collection(`user${id}`)
    .add({
      mail: mail,
      pass: pass,
      id,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    }); */
  console.log(mail, pass);
};
