        const slides = document.querySelectorAll(".slide");
        const slideHeight = slides[0].offsetHeight;
        const marginValue = parseInt(window.getComputedStyle(slides[0]).marginTop);
        var slideHeight_main = slideHeight + marginValue
        const slidesArrPosition = [];
        if (slides.length % 2 === 0)
        {
          var slidesHeight_main = -(slideHeight_main * (slides.length - 2)) / 2;
        }else{
          var slidesHeight_main = -(slideHeight_main * (slides.length - 1)) / 2;
        }
        for (let i = 0; i < slides.length; i++) 
        {
          slides[i].style.transform = `translateY(${slidesHeight_main}px)`;
          slidesArrPosition.push(slidesHeight_main);
          slidesHeight_main = slidesHeight_main + slideHeight_main;
          //console.log(1);
        }


document.addEventListener("DOMContentLoaded", function() 
{
    const arrowUp = document.getElementById("arrow_up");
    const arrowDown = document.getElementById("arrow_down");
  
   
  
    arrowUp.addEventListener("click", function() {
        sliderPosition(0);
    });
  
    arrowDown.addEventListener("click",function() {
        sliderPosition(1);
    });
  
    function sliderPosition(direction) {
        const slider = document.querySelector(".slider");
        if(direction === 0)
        {
          // нижний вверх
          slider.prepend(slider.lastElementChild);
          const slides = document.querySelectorAll(".slide");
          //console.log(slidesArrPosition);
          for (let i = 0; i < slides.length ; i++) 
          {
            //console.log(slidesArrPosition[i] );
            const animation = slides[i].animate(
              [
                 { transform: `translateY(${slidesArrPosition[i] - slideHeight_main}px)` },
                { transform: `translateY(${slidesArrPosition[i]}px)`, offset: 1 } 
              ],
              {
                duration: 500,
                easing: 'linear'
              }
            );
            animation.onfinish = () => {
              slides[i].style.transform = `translateY(${slidesArrPosition[i]}px)`;
            };
          }
        }else if (direction === 1)
        {
          // верхний вниз 
          slider.append(slider.firstElementChild);


          const slides = document.querySelectorAll(".slide");
          //console.log(slidesArrPosition);
          for (let i = 0; i < slides.length ; i++) 
          {
            //console.log(slidesArrPosition[i] );
            const animation = slides[i].animate(
              [
                 { transform: `translateY(${slidesArrPosition[i] + slideHeight_main}px)` },
                 { transform: `translateY(${slidesArrPosition[i]}px)`, offset: 1 } 
              ],
              {
                duration: 500,
                easing: 'linear'
              }
            );
            animation.onfinish = () => {
              slides[i].style.transform = `translateY(${slidesArrPosition[i]}px)`;
            };
          }
        }

        // const slideHeight = slides[0].offsetHeight;
        // const marginValue = parseInt(window.getComputedStyle(slides[0]).marginTop);
        // const displacement = -currentSlide * slideHeight - (marginValue + 1) * currentSlide;
        // console.log(currentSlide);
         //for (let i = 0; i < slides.length; i++) 
        // {
        //   slides[i].style.transform = `translateY(${displacement}px)`;
        // }
    }

});






  