document.addEventListener("DOMContentLoaded", function() 
{
    const arrowUp = document.getElementById("arrow_up");
    const arrowDown = document.getElementById("arrow_down");
    const slides = document.querySelectorAll(".slide");
    var slideUp = true;
    var slideDown = true;
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
  
    arrowDown.addEventListener("click",function() {
      if (currentSlide < slides.length- 2) 
      {
        currentSlide++;
        sliderPosition();
      }
      arrowOpacity(); 
    });
  
    function sliderPosition() {
        const slideHeight = slides[0].offsetHeight;
        const marginValue = parseInt(window.getComputedStyle(slides[0]).marginTop);
        const displacement = -currentSlide * slideHeight - (marginValue + 1) * currentSlide;
        console.log(currentSlide);
        for (let i = 0; i < slides.length; i++) 
        {
          slides[i].style.transform = `translateY(${displacement}px)`;
        }
    }
  
    function arrowOpacity() {
      if (currentSlide === 0) 
      {
        arrowUp.classList.add("disabled");
        slideUp = false;
      } else {
        arrowUp.classList.remove("disabled");
        slideUp = true;
      }
  
      if (currentSlide === slides.length - 2) 
      {
        arrowDown.classList.add("disabled");
        slideDown = false;
      } else {
        arrowDown.classList.remove("disabled");
        slideDown = true;
      }
    }
  });
  