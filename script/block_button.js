// Get all the e_buttons and info blocks
const e_buttons = document.querySelectorAll(".entering__button");
const e_infoBlocks = document.querySelectorAll(".entering__item");

// Function to handle button click
function e_handleButtonClick(index) {
  // Loop through all e_buttons
  e_buttons.forEach((button, i) => {
    // If it's the selected button, add the active class, otherwise, remove it
    if (i === index) {
      button.classList.add("entering__button__active");
    } else {
      button.classList.remove("entering__button__active");
    }
  });

  // Loop through all info blocks
  e_infoBlocks.forEach((block, i) => {
    // If it's the selected block, add the active class, otherwise, remove it
    if (i === index) {
      block.classList.add("entering__item__active");
    } else {
      block.classList.remove("entering__item__active");
    }
  });
}

// Add click event listeners to all e_buttons
e_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    e_handleButtonClick(index);
  });
});

// Initialize the first button and info block as active on page load
e_handleButtonClick(0);
