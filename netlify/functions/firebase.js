const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDmMKfdqTXwQhmeBSa0R8nFoioCCPj_Q9k",
    authDomain: "kiei-451-17d8d.firebaseapp.com",
    projectId: "kiei-451-17d8d",
    storageBucket: "kiei-451-17d8d.appspot.com",
    messagingSenderId: "811628484570",
    appId: "1:811628484570:web:683d9a86f3a43d51a252e3"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase