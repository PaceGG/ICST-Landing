var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var buttonClicked = {
  button1: true,
  button2: false,
  button3: false,
  button4: false,
  button5: false,
};
button1.addEventListener("click", function () {
  change_button("button1", button1);
});
button2.addEventListener("click", function () {
  change_button("button2", button2);
});
button3.addEventListener("click", function () {
  change_button("button3", button3);
});
button4.addEventListener("click", function () {
  change_button("button4", button4);
});
button5.addEventListener("click", function () {
  change_button("button5", button5);
});

function change_button(button_active, button_active1) {
  var buttons = document.querySelectorAll(".button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });
  button_active1.classList.add("active");
  switch (button_active) {
    case "button1":
      if (!buttonClicked[button_active]) {
        buttonClicked[button_active] = true;
        animation_change_button();
      }
      document.getElementById("textOnImage1").innerText = "текст 1";
      document.getElementById("change_image").src = "img/blok_button_img1.png";
      break;
    case "button2":
      if (!buttonClicked[button_active]) {
        buttonClicked[button_active] = true;
        animation_change_button();
      }
      document.getElementById("textOnImage").innerText =
        "Вступительные испытания на сетевую программу с МФТИ проходят в очном формате в ПГНИУ по двум дисциплинам (математика и информатика) в два набора: 1. Основной набор в конце июня 2. Дополнительный набор в начале сентября"; // мфти
      document.getElementById("change_image").src = "img/blok_button_img2.png";
      break;
    case "button3":
      if (!buttonClicked[button_active]) {
        buttonClicked[button_active] = true;
        animation_change_button();
      }
      document.getElementById("textOnImage").innerText = "текст 3";
      document.getElementById("change_image").src = "img/blok_button_img3.png";
      break;
    case "button4":
      if (!buttonClicked[button_active]) {
        buttonClicked[button_active] = true;
        animation_change_button();
      }
      document.getElementById("textOnImage").innerText = "текст 4";
      document.getElementById("change_image").src = "img/blok_button_img4.png";
      break;
    case "button5":
      if (!buttonClicked[button_active]) {
        buttonClicked[button_active] = true;
        animation_change_button();
      }
      document.getElementById("textOnImage").innerText = "текст 5";
      document.getElementById("change_image").src = "img/blok_button_img5.png";
      break;
  }
}

/*анимация*/

const textOnImage = document.getElementById("textOnImage");
const Image1 = document.getElementById("image_container");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      textOnImage.classList.add("show");
      observer.unobserve(textOnImage);
      Image1.classList.add("show");
      observer.unobserve(Image1);
    }
  });
});

observer.observe(textOnImage);
observer.observe(Image1);

function animation_change_button() {
  const textOnImage = document.getElementById("textOnImage");
  const Image1 = document.getElementById("image_container");
  textOnImage.classList.remove("show");
  Image1.classList.remove("show");
  setTimeout(function () {
    textOnImage.classList.add("show");
    Image1.classList.add("show");
  }, 0);
}
