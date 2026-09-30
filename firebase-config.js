const firebaseConfig = {
  apiKey: "AIzaSyBC-Dt6t0-dUB9kpMU4vDlGA-FQX7z-gn8",
  authDomain: "nov3x-coms.firebaseapp.com",
  projectId: "nov3x-coms",
  storageBucket: "nov3x-coms.firebasestorage.app",
  messagingSenderId: "1042584130379",
  appId: "1:1042584130379:web:8b3086563c6348288f0ece"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

auth.setPersistence(
  firebase.auth.Auth.Persistence.LOCAL
).then(() => {
  console.log("NOV3X COMS Firebase connected!");
  console.log("Login persistence enabled!");
}).catch(error => {
  console.error("Persistence error:", error);
});
