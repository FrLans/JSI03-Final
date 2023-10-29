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

fetch("https://6534cb53e1b6f4c59046ee0f.mockapi.io/api/mindy/courses")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let courseHolder = document.querySelector(".courseHolder");
    let renderingCourse = "";
    for (let i = 1; i <= data.length; i++) {
      renderingCourse += `
    <div class="course" courseID="${i}">
    <div class="course_inner">
      <img src="/Final/Images/course${i}.png" alt="" />
      <p class="courseName">${data[i - 1].courseName}</p>
      <i
        class="fa-solid fa-code"
        style="color: #0070c0"
        title="Ngôn ngữ lập trình"
      ></i>
      <p class="coursePreview">${data[i - 1].courseLanguage}</p>
      <br />
      <i
        class="fa-solid fa-clock"
        style="color: #0070c0"
        title="Thời lượng"
      ></i>
      <p class="coursePreview">${data[i - 1].courseDuration}</p>
      <br />
      <i
        class="fa-solid fa-gauge"
        style="color: #0070c0"
        title="Độ phức tạp"
      ></i>
      <p class="coursePreview">${data[i - 1].courseDifficulty}</p>
      <br />
      <i
        class="fa-solid fa-money-check"
        style="color: #0070c0"
        title="Loại khoá học"
      ></i>
      <p class="coursePreview">${data[i - 1].coursePrice}</p>
      <button class="subscribe${
        data[i - 1].coursePriceType
      } dangkyhoc">Đăng ký</button>
    </div>
  </div>`;
    }
    courseHolder.innerHTML = renderingCourse;
  })
  .catch(function (err) {
    console.log(err);
  });

setTimeout(function () {
  let courseRegister = document.querySelectorAll(".dangkyhoc");
  courseRegister.forEach(function (select) {
    select.addEventListener("click", function () {
      if (
        localStorage.getItem("Current User") == "" ||
        localStorage.getItem("Current User") == null
      ) {
        alert("Vui lòng đăng nhập để có thể lựa chọn khoá học");
        window.location.href = "/Final/Login/login.html";
      } else {
        let newCourse =
          this.parentElement.parentElement.getAttribute("courseID");
        let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;
        console.log(currentUID);

        //
        onValue(ref(database, "users/" + currentUID), function (snap) {
          localStorage.setItem(
            "tempCourses",
            JSON.stringify(snap.val().registeredCourses)
          );
          console.log(snap.val().registeredCourses);
        });

        setTimeout(function () {
          let tempCourses = JSON.parse(localStorage.getItem("tempCourses"));
          console.log(tempCourses);
          tempCourses.push(newCourse);
          update(ref(database, "users/" + currentUID), {
            registeredCourses: tempCourses,
          });
          localStorage.setItem("tempCourses", JSON.stringify(tempCourses));
        }, 1000);
      }
    });
  });
}, 2000);
