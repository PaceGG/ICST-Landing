document.addEventListener("DOMContentLoaded", function() 
{
    const arrowUp = document.getElementById("arrow_up");
    const arrowDown = document.getElementById("arrow_down");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    arrowOpacity(); 
  
    arrowUp.addEventListener("click", function() {
      if (currentSlide > 0) 
      {
        currentSlide--;
        sliderPosition();
      }
      arrowOpacity();
    });
  
    arrowDown.addEventListener("click", function() {
      if (currentSlide < slides.length - 1) 
      {
        currentSlide++;
        sliderPosition();
      }
      arrowOpacity(); 
    });
  
    function sliderPosition() {
      const slideHeight = slides[0].offsetHeight;
      const displacement = -currentSlide * slideHeight;
      for (let i = 0; i < slides.length; i++) 
      {
        slides[i].style.transform = `translateY(${displacement}px)`;
      }
    }
  
    function arrowOpacity() {
      if (currentSlide === 0) 
      {
        arrowUp.classList.add("disabled");
      } else {
        arrowUp.classList.remove("disabled");
      }
  
      if (currentSlide === slides.length - 1) 
      {
        arrowDown.classList.add("disabled");
      } else {
        arrowDown.classList.remove("disabled");
      }
    }
  });
  