// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0K83Kb-PkyDUcwhh6lT5VZYtbFR1wY24',
  authDomain: 'bharat-sm.firebaseapp.com',
  projectId: 'bharat-sm',
  storageBucket: 'bharat-sm.appspot.com',
  messagingSenderId: '514728895896',
  appId: '1:514728895896:web:aae542be8f9094e893f7ed',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
