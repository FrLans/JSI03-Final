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

let salesFlag = false;
let salesEnd = new Date("Nov 12, 2023 16:00:00").getTime();
let x = setInterval(function () {
  salesFlag = false;
  let present = new Date().getTime();
  let remaining = salesEnd - present;
  let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  document.getElementById("date").innerText =
    "Thời gian giảm 50% giá đăng kí hội viên còn " +
    days +
    " ngày " +
    hours +
    " giờ " +
    minutes +
    " phút " +
    seconds +
    " giây.";

  if (remaining < 0) {
    salesFlag = true;
    clearInterval(x);
    document.getElementById("date").innerHTML = "Hết thời hạn giảm giá.";
  }
}, 1000);

let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;
const helpme = ref(database, "users/" + currentUID);

let cOwner = document.getElementById("cOwner");
let cNumber = document.getElementById("cNumber");
let cExpire = document.getElementById("cExpire");
let cCVC = document.getElementById("cCVC");
let cBtn = document.getElementById("checkoutreal");

let c1 = document.getElementById("checkouttext1");
let c2 = document.getElementById("checkouttext2");

setTimeout(function () {
  if (salesFlag == false) {
    if (localStorage.getItem("Membership") == 0) {
      c2.innerText =
        "Tiếp tục điền thông tin tài khoản để mua tài khoản Hội viên Tiêu chuẩn với giá chỉ còn 200.000 VNĐ.";
    } else if (localStorage.getItem("Membership") == 1) {
      c1.innerText = "Bạn hiện đang sử dụng tài khoản Hội viên Tiêu chuẩn.";
      c2.innerText =
        "Tiếp tục điền thông tin tài khoản để mua tài khoản Hội viên Cao cấp với giá chỉ còn 2.000.000 VNĐ.";
    } else if (localStorage.getItem("Membership") == 2) {
      c1.innerText = "Bạn đang sử dụng tài khoản Hội viên Cao cấp.";
      c2.innerText =
        "Nếu điền thông tin tài khoản ở dưới, bạn có thể ủng hộ thêm cho mindY mỗi lần 100.000 VNĐ.";
    }
  } else {
    if (localStorage.getItem("Membership") == 1) {
      c1.innerText = "Bạn hiện đang sử dụng tài khoản Hội viên Tiêu chuẩn.";
      c2.innerText =
        "Tiếp tục điền thông tin tài khoản để mua tài khoản Hội viên Cao cấp với giá 1.000.000 VNĐ.";
    } else if (localStorage.getItem("Membership") == 2) {
      c1.innerText = "Bạn đang sử dụng tài khoản Hội viên Cao cấp.";
      c2.innerText =
        "Nếu điền thông tin tài khoản ở dưới, bạn có thể ủng hộ thêm cho mindY mỗi lần 100.000 VNĐ.";
    }
  }
}, 2000);

if (
  localStorage.getItem("Current User") != null &&
  localStorage.getItem("Current User") != ""
) {
  cOwner.value = localStorage.getItem("Owner");
  cNumber.value = localStorage.getItem("Number");
  cExpire.value = localStorage.getItem("Expire");
  cCVC.value = localStorage.getItem("CVC");
}

cBtn.addEventListener("click", function () {
  if (
    localStorage.getItem("Current User") == "" ||
    localStorage.getItem("Current User") == null
  ) {
    alert("Bạn chưa đăng nhập tài khoản.");
    window.location.href = "/Final/Login/login.html";
  } else {
    if (
      cNumber.value.length != 19 ||
      cExpire.value.length != 7 ||
      cCVC.value.length != 3
    ) {
      alert("Hãy điền đầy đủ và đúng định dạng các thông tin thanh toán.");
    } else {
      if (
        Number(
          String(cExpire.value.charAt(3)) +
            String(cExpire.value.charAt(4)) +
            String(cExpire.value.charAt(5)) +
            String(cExpire.value.charAt(6))
        ) < 2024
      ) {
        alert(
          "Thẻ ngân hàng của bạn cần có giá trị sử dụng tới ít nhất là tháng 1 năm 2024."
        );
      } else {
        localStorage.setItem("Owner", cOwner.value);
        localStorage.setItem("Number", cNumber.value);
        localStorage.setItem("Expire", cExpire.value);
        localStorage.setItem("CVC", cCVC.value);
        if (localStorage.getItem("Membership") == 0) {
          localStorage.setItem("Membership", 1);
          onValue(helpme, (snap) => {
            update(helpme, { courseType: 1 });
          });
          window.location.reload();
        } else if (localStorage.getItem("Membership") == 1) {
          localStorage.setItem("Membership", 2);
          onValue(helpme, (snap) => {
            update(courseType, { courseType: 2 });
          });
        }
        alert(
          "Thanh toán thành công! Xin cảm ơn và chúc quý hội viên có trải nghiệm vui vẻ với mindY."
        );
        window.location.reload();
      }
    }
  }
});
