let dangkyhoc = document.querySelector(".dangkyhoc");
dangkyhoc.addEventListener("click", function () {
  window.location.href = "/Final/Courses/course.html";
});
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c0 = document.getElementById("c0");

c1.innerText = localStorage.getItem("tempc1");
c2.innerText = "Ngôn ngữ: " + localStorage.getItem("tempc2");
c3.innerText = "Thời lượng: " + localStorage.getItem("tempc3");
c4.innerText = "Độ phức tạp: " + localStorage.getItem("tempc4");
c5.innerText = "Tài khoản yêu cầu: " + localStorage.getItem("tempc5");
let c0src =
  "/Final/Images/course" + String(localStorage.getItem("tempImgID")) + ".png";
c0.src = c0src;
