import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJqgIsnCux9K_D_LOGMAso_Vd1uDFaXNc",
  authDomain: "stupid-assistant-core.firebaseapp.com",
  projectId: "stupid-assistant-core",
  storageBucket: "stupid-assistant-core.appspot.com",
  messagingSenderId: "565044817793",
  appId: "1:565044817793:web:cf4e40b5f019d930780280",
  measurementId: "G-699KV5HL0L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;