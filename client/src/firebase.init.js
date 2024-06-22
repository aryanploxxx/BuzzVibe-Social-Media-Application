import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA44a5fw_J6eeI008Dw_vM5KDPLAz6pXgk",
  authDomain: "twitter-clone-1f0bf.firebaseapp.com",
  projectId: "twitter-clone-1f0bf",
  storageBucket: "twitter-clone-1f0bf.appspot.com",
  messagingSenderId: "29584811862",
  appId: "1:29584811862:web:a04edf3b86f533318b58f7",
  measurementId: "G-ENFQNLMYGP"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;