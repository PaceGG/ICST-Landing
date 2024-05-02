// Get all the c_buttons and info blocks
const c_buttons = document.querySelectorAll(".curriculum__button");
const c_infoBlocks = document.querySelectorAll(".curriculum__info");

// Function to handle button click
function handleButtonClick(index) {
  // Loop through all c_buttons
  c_buttons.forEach((button, i) => {
    // If it's the selected button, add the active class, otherwise, remove it
    if (i === index) {
      button.classList.add("curriculum__button__active");
    } else {
      button.classList.remove("curriculum__button__active");
    }
  });

  // Loop through all info blocks
  c_infoBlocks.forEach((block, i) => {
    // If it's the selected block, add the active class, otherwise, remove it
    if (i === index) {
      block.classList.add("curriculum__active");
    } else {
      block.classList.remove("curriculum__active");
    }
  });
}

// Add click event listeners to all c_buttons
c_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    handleButtonClick(index);
  });
});

// Initialize the first button and info block as active on page load
handleButtonClick(0);
