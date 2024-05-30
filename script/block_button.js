
const e_buttons = document.querySelectorAll(".entering__button");
const e_infoBlocks = document.querySelectorAll(".entering__item");
function e_handleButtonClick(index) {
  e_buttons.forEach((button, i) => {
    if (i === index) 
    {
      button.classList.add("entering__button__active");
    } else {
      button.classList.remove("entering__button__active");
    }
  });
  e_infoBlocks.forEach((block, i) => {
    if (i === index) 
    {
      block.classList.add("entering__item__active");
    } else {
      block.classList.remove("entering__item__active");
    }
  });
}
e_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    e_handleButtonClick(index);
  });
});
e_handleButtonClick(0);
