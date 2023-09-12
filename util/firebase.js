const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyDRYYBb5qPVglrQlzJWzkyJaFHJimCQiFA",
  authDomain: "apicheck-48df0.firebaseapp.com",
  projectId: "apicheck-48df0",
  storageBucket: "apicheck-48df0.appspot.com",
  messagingSenderId: "988288681385",
  appId: "1:988288681385:web:8889c1e3658a907326b0b8",
  measurementId: "G-W5777KB2HS"
};


const fb = firebase.initializeApp(firebaseConfig);
module.exports = { fb };