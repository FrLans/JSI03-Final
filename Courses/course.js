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
      <button class="subscribe${data[i - 1].coursePriceType}">Đăng ký</button>
    </div>
  </div>`;
    }
    courseHolder.innerHTML = renderingCourse;
  })
  .catch(function (err) {
    console.log(err);
  });
