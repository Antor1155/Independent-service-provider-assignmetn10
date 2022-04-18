import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnZHD8sWAQpyharRz8cQm4fAI20o90awE",
  authDomain: "independent-photographer-726fa.firebaseapp.com",
  projectId: "independent-photographer-726fa",
  storageBucket: "independent-photographer-726fa.appspot.com",
  messagingSenderId: "635386848291",
  appId: "1:635386848291:web:34b64e313c1cd9833d3d96"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;