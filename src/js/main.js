import "../scss/main.scss";
import "../index.html";
import "regenerator-runtime/runtime";
import Auth from "./components/Authorization/Authorization";
import { titles } from "../utils/root";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCRj-SDncfuwhiQjj-UcRXAsavnI22LfnM",
  authDomain: "auth-17e27.firebaseapp.com",
  databaseURL: "https://auth-17e27-default-rtdb.firebaseio.com",
  projectId: "auth-17e27",

  appId: "1:423160778158:web:46f8482f687c34337c4c3f",
};
firebase.initializeApp(firebaseConfig);
export const authFB = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
Auth();
