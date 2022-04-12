import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
     apiKey: "AIzaSyAeeionrV3oFQMmmn34UEmWqWGTc-ksRh0",
     authDomain: "emah-john-simple.firebaseapp.com",
     projectId: "emah-john-simple",
     storageBucket: "emah-john-simple.appspot.com",
     messagingSenderId: "781208526548",
     appId: "1:781208526548:web:d55c5f15fb19f4de2ae541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
