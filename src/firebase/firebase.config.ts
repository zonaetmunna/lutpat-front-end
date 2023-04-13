import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAC1KNLX5Q0vXxG82Y4KCYbwvfR5G3yrls",
    authDomain: "lutpat-ecommerce.firebaseapp.com",
    projectId: "lutpat-ecommerce",
    storageBucket: "lutpat-ecommerce.appspot.com",
    messagingSenderId: "252169520061",
    appId: "1:252169520061:web:7cb84f5c4b8804ee5088d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// export
export default auth;