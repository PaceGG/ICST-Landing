var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

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
      document.getElementById("textOnImage").innerText = "текст 1";
      document.getElementById("change_image").src = "img/blok_button_img1.png";
      break;
    case "button2":
      document.getElementById("textOnImage").innerText = "текст 2";
      document.getElementById("change_image").src = "img/blok_button_img2.png";
      break;
    case "button3":
      document.getElementById("textOnImage").innerText = "текст 3";
      document.getElementById("change_image").src = "img/blok_button_img3.png";
      break;
    case "button4":
      document.getElementById("textOnImage").innerText = "текст 4";
      document.getElementById("change_image").src = "img/blok_button_img4.png";
      break;
    case "button5":
      document.getElementById("textOnImage").innerText = "текст 5";
      document.getElementById("change_image").src = "img/blok_button_img5.png";
      break;
  }
}
