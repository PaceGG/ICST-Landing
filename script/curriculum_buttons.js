
const c_buttons = document.querySelectorAll(".curriculum__button");
const c_infoBlocks = document.querySelectorAll(".curriculum__info");
function handleButtonClick(index) {
  c_buttons.forEach((button, i) => {
    if (i === index) 
    {
      button.classList.add("curriculum__button__active");
    } else {
      button.classList.remove("curriculum__button__active");
    }
  });
  c_infoBlocks.forEach((block, i) => {
    if (i === index) 
    {
      block.classList.add("curriculum__active");
    } else {
      block.classList.remove("curriculum__active");
    }
  });
}

c_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    handleButtonClick(index);
  });
});
handleButtonClick(0);
