let caroLeft = document.getElementById("caroLeft");
let caroRight = document.getElementById("caroRight");
let carousel1 = document.getElementById("carousel1");
let carousel2 = document.getElementById("carousel2");
let carousel3 = document.getElementById("carousel3");
let caText1 = document.getElementById("caText1");
let caText2 = document.getElementById("caText2");
let caText3 = document.getElementById("caText3");

carousel1.style.display = "block";
carousel2.style.display = "none";
carousel3.style.display = "none";
caText1.style.display = "block";
caText2.style.display = "none";
caText3.style.display = "none";

caroLeft.addEventListener("click", function () {
  if (carousel1.style.display == "block") {
    carousel1.style.display = "none";
    caText1.style.display = "none";
    carousel3.style.display = "block";
    caText3.style.display = "block";
  } else if (carousel2.style.display == "block") {
    carousel2.style.display = "none";
    carousel1.style.display = "block";
    caText2.style.display = "none";
    caText1.style.display = "block";
  } else {
    carousel3.style.display = "none";
    carousel2.style.display = "block";
    caText3.style.display = "none";
    caText2.style.display = "block";
  }
});

function caroMove() {
  if (carousel1.style.display == "block") {
    carousel1.style.display = "none";
    caText1.style.display = "none";
    carousel2.style.display = "block";
    caText2.style.display = "block";
  } else if (carousel2.style.display == "block") {
    carousel2.style.display = "none";
    carousel3.style.display = "block";
    caText2.style.display = "none";
    caText3.style.display = "block";
  } else {
    carousel3.style.display = "none";
    carousel1.style.display = "block";
    caText3.style.display = "none";
    caText1.style.display = "block";
  }
}
caroRight.addEventListener("click", caroMove);

setInterval(caroMove, 3000);
