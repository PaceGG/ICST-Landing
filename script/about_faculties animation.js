var childElements = document.querySelectorAll(".about_faculties__text");
childElements.forEach(function (childElement) {
  var childHeight = childElement.clientHeight;
  var parentElement = childElement.parentElement;
  parentElement.style.height = childHeight + "px";
});
