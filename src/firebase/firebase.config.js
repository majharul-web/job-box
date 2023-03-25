import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyR6o_I2_lRJY8VBY9WoC-XdsKjfWHzC0",
  authDomain: "jobbox-34a3f.firebaseapp.com",
  projectId: "jobbox-34a3f",
  storageBucket: "jobbox-34a3f.appspot.com",
  messagingSenderId: "920832683570",
  appId: "1:920832683570:web:3aee0fc2aea3f7f52d562b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
