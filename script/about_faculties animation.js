// Выезд сбоку
var childElements = document.querySelectorAll(".about_faculties__text");
childElements.forEach(function (childElement) {
  var childHeight = childElement.clientHeight;
  var parentElement = childElement.parentElement;
  parentElement.style.height = childHeight + "px";
});

// Выезд сверху
var childElements = document.querySelectorAll(".about_faculties__text_box");
childElements.forEach(function (childElement) {
  var childHeight = childElement.clientHeight;
  var parentElement = childElement.parentElement;
  parentElement.style.height = childHeight + "px";
});

// Анимация при скролле
window.addEventListener("scroll", function () {
  var screenPosition = window.innerHeight -200;

  var block1 = document.getElementById("about_faculties__top_animation_area_1");
  var block1Position = block1.getBoundingClientRect().top;
  if (block1Position < screenPosition) {
    var h3_1 = document.getElementById("about_faculties__h3_1");
    block1.classList.add("about_faculties__animation_apply");
    h3_1.classList.add("about_faculties__animation_h3_left");
  }

  var block2 = document.getElementById("about_faculties__top_animation_area_2");
  var block2Position = block2.getBoundingClientRect().top;
  if (block2Position < screenPosition) {
    var h3_2 = document.getElementById("about_faculties__h3_2");
    block2.classList.add("about_faculties__animation_apply");
    h3_2.classList.add("about_faculties__animation_h3_right");
  }

  var block3 = document.getElementById("about_faculties__top_animation_area_3");
  var block3Position = block3.getBoundingClientRect().top;
  if (block3Position < screenPosition) {
    var h3_3 = document.getElementById("about_faculties__h3_3");
    block3.classList.add("about_faculties__animation_apply");
    h3_3.classList.add("about_faculties__animation_h3_left");
  }
  
  var block4 = document.getElementById("about_faculties__top_animation_area_4");
  var block4Position = block4.getBoundingClientRect().top;
  if (block4Position < screenPosition) {
    var h3_4 = document.getElementById("about_faculties__h3_4");
    block4.classList.add("about_faculties__animation_apply");
    h3_4.classList.add("about_faculties__animation_h3_right");
  }
});
