var buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonId = this.id;
        change_button(buttonId);
    });
});

function change_button(button_active) {
    var image_container = document.querySelectorAll(".image-container");

    image_container.forEach(function(block) {
        block.style.display = "none";
        //console.log(block);
    });
    buttons.forEach(function(button) {
      button.classList.remove("active");
    });
//console.log(button_active);
    document.getElementById(button_active).classList.add("active");
    switch (button_active) {
        case "button1":
            document.getElementById("image_container1").style.display = "flex";
            break;
        case "button2":
            document.getElementById("image_container2").style.display = "flex";
            break;
        case "button3":
            document.getElementById("image_container3").style.display = "flex";
            break;
        case "button4":
            document.getElementById("image_container4").style.display = "flex";
            break;
        case "button5":
            document.getElementById("image_container5").style.display = "flex";
            break;
    }
}
