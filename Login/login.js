// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG3x4A5E8XjDGs6Tygl-ZFQBoNdBjtOXc",
  authDomain: "jsi03-final.firebaseapp.com",
  projectId: "jsi03-final",
  storageBucket: "jsi03-final.appspot.com",
  messagingSenderId: "1035401530035",
  appId: "1:1035401530035:web:7bb5e28b828570b1efbec6",
  measurementId: "G-4T2SWJJ5WB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Change Functions
let change1 = document.getElementById("changebtn1");
let change2 = document.getElementById("changebtn2");
let loginbox = document.getElementById("loginbox");
let signupbox = document.getElementById("signupbox");
change1.addEventListener("click", function () {
  loginbox.style.display = "block";
  signupbox.style.display = "none";
});
change2.addEventListener("click", function () {
  loginbox.style.display = "none";
  signupbox.style.display = "block";
});

// Sign Out
let initUser = localStorage.getItem("Current User");
console.log(initUser);
let signoutbox = document.getElementById("signoutbox");
if (initUser != "" && initUser != null) {
  loginbox.style.display = "none";
  signupbox.style.display = "none";
  signoutbox.style.display = "block";
}
let signOut = document.getElementById("changebtn3");
signOut.addEventListener("click", function () {
  localStorage.setItem("Current User", "");
  localStorage.setItem("Test", "");
  localStorage.setItem("tempCourses", JSON.stringify([]));
  window.location.reload();
});
// sign up
let signup = document.getElementById("signup");
signup.addEventListener("click", function () {
  let username = document.getElementById("usernameSU").value;
  let email = document.getElementById("emailSU").value;
  let password = document.getElementById("passSU").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        username: username,
        email: email,
        courseType: 0,
        registeredCourses: ["1", "2"],
      });
      alert("Tạo tài khoản thành công!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage, errorCode);
    });
});

// login
let login = document.getElementById("login");
login.addEventListener("click", function () {
  let email = document.getElementById("emailLI").value;
  let password = document.getElementById("passLI").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("Test", JSON.stringify(userCredential));
      onValue(ref(database, "users/" + user.uid), function (snap) {
        localStorage.setItem("Current User", snap.val().username);
      });
      // alert(
      //   "Đăng nhập thành công! Chào mừng " +
      //     localStorage.getItem("Current User")
      // );
      // window.location.href = "/Final/index.html";}
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
