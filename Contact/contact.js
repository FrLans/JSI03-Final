let formMail = document.getElementById("formMail");
console.log(JSON.parse(localStorage.getItem("Test")).user.email);
formMail.value = JSON.parse(localStorage.getItem("Test")).user.email;
let weather = document.getElementById("weather");
let locationShow = document.getElementById("location_show");
let temperature = document.getElementById("temperature");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let bg = document.getElementById("bgimg");

let n = 0;
function search() {
  let link = `https://geocoding-api.open-meteo.com/v1/search?name=${input.value}`;
  fetch(link)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      locationShow.innerHTML =
        data.results[n].name + ", " + data.results[n].country_code;
      let templink = `https://api.open-meteo.com/v1/forecast?latitude=${data.results[n].latitude}&longitude=${data.results[n].longitude}&current_weather=true`;
      fetch(templink)
        .then(function (response1) {
          return response1.json();
        })
        .then(function (data1) {
          temperature.innerHTML = data1.current_weather.temperature + "°C";
          let weathertype = "";
          switch (data1.current_weather.weathercode) {
            case 0:
              weathertype = "Trong xanh";
              bg.src = "/Final/Images/case_0-1.jpg";
              break;
            case 1:
              weathertype = "Trời gần xanh";
              bg.src = "/Final/Images/case_0-1.jpg";
              break;
            case 2:
              weathertype = "Mây nhẹ";
              bg.src = "/Final/Images/case_2-3.jfif";
              break;
            case 3:
              weathertype = "Mây nhiều";
              bg.src = "/Final/Images/case_2-3.jfif";
              break;
            case 45:
              weathertype = "Sương mù";
              bg.src = "/Final/Images/case_45-48.jpg";
              break;
            case 48:
              weathertype = "Sương mù lạnh";
              bg.src = "/Final/Images/case_45-48.jpg";
              break;
            case 51:
              weathertype = "Mưa phùn nhẹ";
              bg.src = "/Final/Images/case_51-55.webp";
              break;
            case 53:
              weathertype = "Mưa phùn vừa";
              bg.src = "/Final/Images/case_51-55.webp";
              break;
            case 55:
              weathertype = "Mưa phùn lớn";
              bg.src = "/Final/Images/case_51-55.webp";
              break;
            case 56:
              weathertype = "Mưa phùn lạnh mạnh";
              bg.src = "/Final/Images/case_56-57.png";
              break;
            case 57:
              weathertype = "Mưa phùn lạnh mạnh";
              bg.src = "/Final/Images/case_56-57.png";
              break;
            case 61:
              weathertype = "Mưa nhẹ";
              bg.src = "/Final/Images/case_61-63-80-81.jpg";
              break;
            case 63:
              weathertype = "Mưa vừa";
              bg.src = "/Final/Images/case_61-63-80-81.jpg";
              break;
            case 65:
              weathertype = "Mưa nặng";
              bg.src = "/Final/Images/case_65-82.avif";
              break;
            case 66:
              weathertype = "Mưa lạnh nhẹ";
              bg.src = "/Final/Images/case_66-67.avif";
              break;
            case 67:
              weathertype = "Mưa lạnh nặng";
              bg.src = "/Final/Images/case_66-67.avif";
              break;
            case 71:
              weathertype = "Tuyết rơi nhẹ";
              bg.src = "/Final/Images/case_71-73-85.jpg";
              break;
            case 73:
              weathertype = "Tuyết rơi vừa";
              bg.src = "/Final/Images/case_71-73-85.jpg";
              break;
            case 75:
              weathertype = "Tuyết rơi mạnh";
              bg.src = "/Final/Images/case_75-86.jfif";
              break;
            case 77:
              weathertype = "Mưa đá";
              bg.src = "/Final/Images/case_77.webp";
              break;
            case 80:
              weathertype = "Mưa giông nhẹ";
              bg.src = "/Final/Images/case_61-63-80-81.jpg";
              break;
            case 81:
              weathertype = "Mưa giông vừa";
              bg.src = "/Final/Images/case_61-63-80-81.jpg";
              break;
            case 82:
              weathertype = "Vũ bão";
              bg.src = "/Final/Images/case_65-82.avif";
              break;
            case 85:
              weathertype = "Mưa tuyết nhẹ";
              bg.src = "/Final/Images/case_71-73-85.jpg";
              break;
            case 86:
              weathertype = "Mưa tuyết nặng";
              bg.src = "/Final/Images/case_75-86.jfif";
              break;
            case 95:
              weathertype = "Bão nhẹ/vừa";
              bg.src = "/Final/Images/case_95.webp";
              break;
            case 96:
              weathertype = "Bão và mưa đá nhẹ";
              bg.src = "/Final/Images/case_96-99.png";
              break;
            case 99:
              weathertype = "Bão và mưa đá nặng";
              bg.src = "/Final/Images/case_96-99.png";
              break;
            default:
              weathertype = "Lỗi";
              bg.src = "/Final/Images/error.jpg";
          }
          weather.innerText = weathertype;
        });
    });
}
btn.addEventListener("click", function () {
  n = 0;
  search();
});
btn2.addEventListener("click", function () {
  n = n + 1;
  search();
});
