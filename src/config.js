// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDC-evx9w_YNmm8V-G4m9akZukwiwPr-ng',
  authDomain: 'product-cart-c0881.firebaseapp.com',
  projectId: 'product-cart-c0881',
  storageBucket: 'product-cart-c0881.appspot.com',
  messagingSenderId: '257453443747',
  appId: '1:257453443747:web:4c4f593e05f291d7c60d16',
}
// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
