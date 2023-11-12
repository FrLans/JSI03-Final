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

// Detail Page
// Rendering Courses
fetch("https://6534cb53e1b6f4c59046ee0f.mockapi.io/api/mindy/courses")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let courseHolder1 = document.querySelector(".courseHolder1");
    let courseHolder2 = document.querySelector(".courseHolder2");

    // Check for old courses
    let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;

    onValue(ref(database, "users/" + currentUID), function (snap) {
      localStorage.setItem(
        "tempCourses",
        JSON.stringify(snap.val().registeredCourses)
      );
    });
    let tempCourses = JSON.parse(localStorage.getItem("tempCourses"));

    // Add courses
    let renderingCourse1 = "";
    let renderingCourse2 = "";
    for (let i = 1; i <= data.length; i++) {
      let tempcourseFlag = false;
      for (let l = 1; l <= tempCourses.length; l++) {
        if (tempCourses[l] == i) tempcourseFlag = true;
      }
      if (tempcourseFlag == true) {
        renderingCourse1 += `
        <div class="course" courseID="${i}" courseName="${
          data[i - 1].courseName
        }" courseLanguage="${data[i - 1].courseLanguage}"
        courseDuration="${data[i - 1].courseDuration}" courseDifficulty="${
          data[i - 1].courseDifficulty
        }" coursePrice="${data[i - 1].coursePrice}" coursePriceType=${
          data[i - 1].coursePriceType
        }>
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
          } huydangky">Huỷ khoá</button>
        </div>
      </div>
        `;
        tempcourseFlag = false;
      } else {
        renderingCourse2 += `
        <div class="course" courseID="${i}" courseName="${
          data[i - 1].courseName
        }" courseLanguage="${data[i - 1].courseLanguage}"
        courseDuration="${data[i - 1].courseDuration}" courseDifficulty="${
          data[i - 1].courseDifficulty
        }" coursePrice="${data[i - 1].coursePrice}" coursePriceType=${
          data[i - 1].coursePriceType
        }>
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
    }
    courseHolder1.innerHTML = renderingCourse1;
    courseHolder2.innerHTML = renderingCourse2;
  })
  .catch(function (err) {
    console.log(err);
  });

// Đăng ký khoá (Enroll course)

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
        if (
          Number(localStorage.getItem("Membership")) <
          Number(
            this.parentElement.parentElement.getAttribute("coursePriceType")
          )
        ) {
          alert(
            "Gói học viên hiện tại của bạn không thể tham gia khoá học này"
          );
        } else {
          let newCourse =
            this.parentElement.parentElement.getAttribute("courseID");
          let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;
          // Add courses
          onValue(ref(database, "users/" + currentUID), function (snap) {
            localStorage.setItem(
              "tempCourses",
              JSON.stringify(snap.val().registeredCourses)
            );
          });
          setTimeout(function () {
            let tempCourses = JSON.parse(localStorage.getItem("tempCourses"));
            let courseFlag = false;
            for (let i = 0; i <= tempCourses.length; i++) {
              if (tempCourses[i] == newCourse) {
                courseFlag = true;
              }
            }
            if (courseFlag == false) {
              tempCourses.push(newCourse);
              update(ref(database, "users/" + currentUID), {
                registeredCourses: tempCourses,
              });
              localStorage.setItem("tempCourses", JSON.stringify(tempCourses));
              setTimeout(function () {
                window.location.reload();
              }, 1000);
            } else {
              courseFlag = false;
            }
          }, 1000);
        }
      }
    });
  });
}, 2000);

// Huỷ đăng ký học

setTimeout(function () {
  let courseCancel = document.querySelectorAll(".huydangky");
  courseCancel.forEach(function (select) {
    select.addEventListener("click", function () {
      let cancelCourse =
        this.parentElement.parentElement.getAttribute("courseID");
      let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;
      let array1 = JSON.parse(localStorage.getItem("tempCourses"));
      let index = array1.indexOf(cancelCourse);
      array1.splice(index, 1);
      const helpme = ref(database, "users/" + currentUID);
      onValue(helpme, (snap) => {
        update(helpme, {
          registeredCourses: array1,
        });
      });

      setTimeout(function () {
        window.location.reload();
      }, 1000);
    });
  });
}, 3000);

// Detailed courses
setTimeout(function () {
  let courseImg = document.querySelectorAll(".course_inner img");
  courseImg.forEach(function (select) {
    select.addEventListener("click", function () {
      localStorage.setItem(
        "tempc1",
        this.parentElement.parentElement.getAttribute("courseName")
      );
      localStorage.setItem(
        "tempc2",
        this.parentElement.parentElement.getAttribute("courseLanguage")
      );
      localStorage.setItem(
        "tempc3",
        this.parentElement.parentElement.getAttribute("courseDuration")
      );
      localStorage.setItem(
        "tempc4",
        this.parentElement.parentElement.getAttribute("courseDifficulty")
      );
      localStorage.setItem(
        "tempc5",
        this.parentElement.parentElement.getAttribute("coursePrice")
      );
      localStorage.setItem(
        "tempImgID",
        this.parentElement.parentElement.getAttribute("courseID")
      );
      setTimeout(function () {
        window.location.href = "/Final/Detailed Courses/detail.html";
      }, 2000);
    });
  });
}, 3000);
// Làm cái search
