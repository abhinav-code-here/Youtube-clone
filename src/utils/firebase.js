import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCj7NWIRk-cRi4ARqSKzeTSsFRH2ON0_D0",
  authDomain: "project-react-02.firebaseapp.com",
  projectId: "project-react-02",
  storageBucket: "project-react-02.appspot.com",
  messagingSenderId: "151006069781",
  appId: "1:151006069781:web:d8976d00b3f07ef480ba1c",
  measurementId: "G-L2B9TPEXCS",
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
