// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi9yx_w2T98TENL2v25zPLMfNydYM2M4A",
  authDomain: "fir-react-89e6a.firebaseapp.com",
  projectId: "fir-react-89e6a",
  storageBucket: "fir-react-89e6a.firebasestorage.app",
  messagingSenderId: "1022926848504",
  appId: "1:1022926848504:web:32eb00e7e4d4f8c937560d",
  measurementId: "G-GPNSW5TRXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

// Asynchronous function to get data from Firestore
const firebaseData = async () => {

    try {

        const querySnapshot = await getDocs(collection(db, "Footer")); // "Foother" kolleksiyasini olish

        const documentsArray = [];

        querySnapshot.forEach((doc) => {
            documentsArray.push({ id: doc.id, ...doc.data() });
        });

        console.log("Barcha hujjatlar:", documentsArray);
    } catch (error) {
        console.error("Error fetching documents:", error);
    }

};

export { firebaseData }