// Render
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let renderingArray1 = "";
let cmtHolder1 = document.getElementById("cmtHolder1");
let renderingArray2 = "";
let cmtHolder2 = document.getElementById("cmtHolder2");
let renderingArray3 = "";
let cmtHolder3 = document.getElementById("cmtHolder3");

for (
  let i = JSON.parse(localStorage.getItem("CmtArray1")).length - 1;
  i >= 0;
  i--
) {
  renderingArray1 += `<div class="cmtBox"><div class="cmtProfileBox">
  <img src="/Final/Images/userImg.jpg" alt="" class="cmtImg" />
  <div class="cmtProfile">
    <p class="cmtHost">  ${
      JSON.parse(localStorage.getItem("UserArray1"))[i]
    }</p>
    <p class="cmtDate">
  ${JSON.parse(localStorage.getItem("DateArray1"))[i]}
    </p>
  </div>
  <img class="heart" src="/Final/Images/heart0.png">
</div>
<p class="cmtText">
  ${JSON.parse(localStorage.getItem("CmtArray1"))[i]}
</p>
</div>`;
}
cmtHolder1.innerHTML = renderingArray1;

for (
  let i = JSON.parse(localStorage.getItem("CmtArray2")).length - 1;
  i >= 0;
  i--
) {
  renderingArray2 += `<div class="cmtBox"><div class="cmtProfileBox">
    <img src="/Final/Images/userImg.jpg" alt="" class="cmtImg" />
    <div class="cmtProfile">
      <p class="cmtHost">  ${
        JSON.parse(localStorage.getItem("UserArray2"))[i]
      }</p>
      <p class="cmtDate">
    ${JSON.parse(localStorage.getItem("DateArray2"))[i]}
      </p>
    </div>
    <img class="heart" src="/Final/Images/heart0.png">
  </div>
  <p class="cmtText">
    ${JSON.parse(localStorage.getItem("CmtArray2"))[i]}
  </p>
  </div>`;
}
cmtHolder2.innerHTML = renderingArray2;

for (
  let i = JSON.parse(localStorage.getItem("CmtArray3")).length - 1;
  i >= 0;
  i--
) {
  renderingArray3 += `<div class="cmtBox"><div class="cmtProfileBox">
    <img src="/Final/Images/userImg.jpg" alt="" class="cmtImg" />
    <div class="cmtProfile">
      <p class="cmtHost">  ${
        JSON.parse(localStorage.getItem("UserArray3"))[i]
      }</p>
      <p class="cmtDate">
    ${JSON.parse(localStorage.getItem("DateArray3"))[i]}
      </p>
    </div>
    <img class="heart" src="/Final/Images/heart0.png">
  </div>
  <p class="cmtText">
    ${JSON.parse(localStorage.getItem("CmtArray3"))[i]}
  </p>
  </div>`;
}
cmtHolder3.innerHTML = renderingArray3;

// Add comment
let send1 = document.getElementById("send1");
let zone1 = document.getElementById("zone1");
send1.addEventListener("click", function () {
  if (
    localStorage.getItem("Current User") == "" ||
    localStorage.getItem("Current User") == null
  ) {
    alert("Vui lòng đăng nhập để có thể bình luận");
    window.location.href = "/Final/Login/login.html";
  } else {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let CmtArray1 = JSON.parse(localStorage.getItem("CmtArray1"));
    let DateArray1 = JSON.parse(localStorage.getItem("DateArray1"));
    let UserArray1 = JSON.parse(localStorage.getItem("UserArray1"));
    let content = zone1.value;
    CmtArray1.push(content);
    DateArray1.push(day + "/" + month + "/" + year);
    UserArray1.push(localStorage.getItem("Current User"));
    localStorage.setItem("DateArray1", JSON.stringify(DateArray1));
    localStorage.setItem("UserArray1", JSON.stringify(UserArray1));
    localStorage.setItem("CmtArray1", JSON.stringify(CmtArray1));

    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
});

let send2 = document.getElementById("send2");
let zone2 = document.getElementById("zone2");
send2.addEventListener("click", function () {
  if (
    localStorage.getItem("Current User") == "" ||
    localStorage.getItem("Current User") == null
  ) {
    alert("Vui lòng đăng nhập để có thể bình luận");
    window.location.href = "/Final/Login/login.html";
  } else {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let CmtArray2 = JSON.parse(localStorage.getItem("CmtArray2"));
    let DateArray2 = JSON.parse(localStorage.getItem("DateArray2"));
    let UserArray2 = JSON.parse(localStorage.getItem("UserArray2"));
    let content = zone2.value;
    CmtArray2.push(content);
    DateArray2.push(day + "/" + month + "/" + year);
    UserArray2.push(localStorage.getItem("Current User"));
    localStorage.setItem("DateArray2", JSON.stringify(DateArray2));
    localStorage.setItem("UserArray2", JSON.stringify(UserArray2));
    localStorage.setItem("CmtArray2", JSON.stringify(CmtArray2));

    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
});

let send3 = document.getElementById("send3");
let zone3 = document.getElementById("zone3");
send3.addEventListener("click", function () {
  if (
    localStorage.getItem("Current User") == "" ||
    localStorage.getItem("Current User") == null
  ) {
    alert("Vui lòng đăng nhập để có thể bình luận");
    window.location.href = "/Final/Login/login.html";
  } else {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let CmtArray3 = JSON.parse(localStorage.getItem("CmtArray3"));
    let DateArray3 = JSON.parse(localStorage.getItem("DateArray3"));
    let UserArray3 = JSON.parse(localStorage.getItem("UserArray3"));
    let content = zone3.value;
    CmtArray3.push(content);
    DateArray3.push(day + "/" + month + "/" + year);
    UserArray3.push(localStorage.getItem("Current User"));
    localStorage.setItem("DateArray3", JSON.stringify(DateArray3));
    localStorage.setItem("UserArray3", JSON.stringify(UserArray3));
    localStorage.setItem("CmtArray3", JSON.stringify(CmtArray3));

    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
});

let cmtcount1 = document.getElementById("cmtcount1");
let cmtcount2 = document.getElementById("cmtcount2");
let cmtcount3 = document.getElementById("cmtcount3");

cmtcount1.innerText =
  "Số bình luận: " + JSON.parse(localStorage.getItem("CmtArray1")).length;
cmtcount2.innerText =
  "Số bình luận: " + JSON.parse(localStorage.getItem("CmtArray2")).length;
cmtcount3.innerText =
  "Số bình luận: " + JSON.parse(localStorage.getItem("CmtArray3")).length;

let show1 = document.getElementById("show1");
let show2 = document.getElementById("show2");
let show3 = document.getElementById("show3");
let sect1 = document.getElementById("sect1");
let sect2 = document.getElementById("sect2");
let sect3 = document.getElementById("sect3");

show1.addEventListener("click", function () {
  if (show1.innerText == "Hiển thị bình luận") {
    show1.innerText = "Ẩn bình luận";
    sect1.style.display = "block";
  } else {
    show1.innerText = "Hiển thị bình luận";
    sect1.style.display = "none";
  }
});

show2.addEventListener("click", function () {
  if (show2.innerText == "Hiển thị bình luận") {
    show2.innerText = "Ẩn bình luận";
    sect2.style.display = "block";
  } else {
    show2.innerText = "Hiển thị bình luận";
    sect2.style.display = "none";
  }
});

show3.addEventListener("click", function () {
  if (show3.innerText == "Hiển thị bình luận") {
    show3.innerText = "Ẩn bình luận";
    sect3.style.display = "block";
  } else {
    show3.innerText = "Hiển thị bình luận";
    sect3.style.display = "none";
  }
});

// Tim cmt
setTimeout(function () {
  let heart = document.querySelectorAll(".heart");
  heart.forEach(function (select) {
    select.addEventListener("click", function () {
      select.src = "/Final/Images/heart1.png";
      let HeartArray = JSON.parse(localStorage.getItem("HeartArray1")[i]);
      let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;
      let tempHeartFlag = false;
      for (let i = 0; i < HeartArray1.length; i++) {
        if (HeartArray1[i] == currentUID) {
          tempHeartFlag = true;
        }
        if ((tempHeartFlag = false)) {
          HeartArray1.push(currentUID);
        }
      }
      localStorage.setItem("HeartArray1", HeartArray1);
    });
  });
}, 1000);

setTimeout(function () {
  let heart = document.querySelectorAll(".heart");
  heart.forEach(function (select) {
    select.addEventListener("click", function () {
      select.src = "/Final/Images/heart1.png";
      let HeartArray2 = JSON.parse(localStorage.getItem("HeartArray2"));
      let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;
      let tempHeartFlag = false;
      for (let i = 0; i < HeartArray2.length; i++) {
        if (HeartArray2[i] == currentUID) {
          tempHeartFlag = true;
        }
        if ((tempHeartFlag = false)) {
          HeartArray2.push(currentUID);
        }
      }
      localStorage.setItem("HeartArray2", HeartArray2);
    });
  });
}, 1000);

setTimeout(function () {
  let heart = document.querySelectorAll(".heart");
  heart.forEach(function (select) {
    select.addEventListener("click", function () {
      select.src = "/Final/Images/heart1.png";
      let HeartArray3 = JSON.parse(localStorage.getItem("HeartArray3"));
      let currentUID = JSON.parse(localStorage.getItem("Test")).user.uid;
      let tempHeartFlag = false;
      for (let i = 0; i < HeartArray3.length; i++) {
        if (HeartArray3[i] == currentUID) {
          tempHeartFlag = true;
        }
        if ((tempHeartFlag = false)) {
          HeartArray3.push(currentUID);
        }
      }
      localStorage.setItem("HeartArray3", HeartArray3);
    });
  });
}, 1000);
