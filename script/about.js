const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
 if (!isMobile){
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
}







if (isMobile) {
  const slides = document.querySelectorAll(".slide");
  const slideWidth = slides[0].offsetWidth;
  const marginValue = parseInt(window.getComputedStyle(slides[0]).marginLeft);
  //  console.log(marginValue);
  var slideWidth_main = slideWidth + (marginValue);
  const slidesArrPosition = [];
  if (slides.length % 2 === 0)
  {
    var slidesWidth_main = -(slideWidth_main * (slides.length - 2)) / 2;
  }else{
    var slidesWidth_main = -(slideWidth_main * (slides.length - 1)) / 2;
  }
  for (let i = 0; i < slides.length; i++) 
  {
    slides[i].style.transform = `translateX(${slidesWidth_main}px)`;
    slidesArrPosition.push(slidesWidth_main);
    slidesWidth_main = slidesWidth_main + slideWidth_main;
    //console.log(1);
  }


  const slaiderList_mobal = document.querySelector('.slider');
  let startX, currentX, offsetX, direction, offsetX_prev = 0;
  const slaiders_mobal = Array.from(slaiderList_mobal.children);

  function TouchStart(e) {
    startX = e.touches[0].clientX;
    offsetX = slaiderList_mobal.scrollLeft;
  }

  function TouchMove(e) {

    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    slaiderList_mobal.scrollLeft = offsetX - diff;
    direction = (offsetX - diff < offsetX_prev )? 1 : 0;
    offsetX_prev = offsetX - diff;
    //console.log(offsetX_prev);
  }

  function TouchEnd() {
    // вправо  
    if (direction === 1) 
    {
      slaiderList_mobal.prepend(slaiderList_mobal.lastElementChild);
      const slides = document.querySelectorAll(".slide");
      //console.log(slidesArrPosition);
      for (let i = 0; i < slides.length ; i++) 
      {
        //console.log(slidesArrPosition[i] );
        const animation = slides[i].animate(
          [
            { transform: `translateX(${slidesArrPosition[i] - slideWidth_main}px)` },
            { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
          ],
          {
            duration: 500,
            easing: 'linear'
          }
        );
        animation.onfinish = () => {
          slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
        };
        //slidesArrPosition[i] = slidesArrPosition[i] - offsetX_prev;
      }
    }else{// влево  
      //slaiderList_mobal.append(slaiderList_mobal.firstElementChild);
      console.log(1);
      slaiderList_mobal.append(slaiderList_mobal.firstElementChild);
      const slides = document.querySelectorAll(".slide");
      //console.log(slidesArrPosition);
      for (let i = 0; i < slides.length ; i++) 
      {
        //console.log(slidesArrPosition[i] );
        const animation = slides[i].animate(
          [
            { transform: `translateX(${slidesArrPosition[i] + slideWidth_main}px)` },
            { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
          ],
          {
            duration: 500,
            easing: 'linear'
          }
        );
        animation.onfinish = () => {
          slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
        };
        console.log(slidesArrPosition[i] + offsetX_prev);
       // slidesArrPosition[i] = slidesArrPosition[i] + offsetX_prev;
      }
      
    }
  }


  slaiderList_mobal.addEventListener('touchstart', TouchStart);
  slaiderList_mobal.addEventListener('touchmove', TouchMove);
  slaiderList_mobal.addEventListener('touchend', TouchEnd);
}







// if (isMobile) {
//   const slides = document.querySelectorAll(".slide");
//   const slideWidth = slides[0].offsetWidth;
//   const marginValue = parseInt(window.getComputedStyle(slides[0]).marginLeft);
//   var slideWidth_main = slideWidth + marginValue
//   const slidesArrPosition = [];
//   if (slides.length % 2 === 0)
//   {
//     var slidesWidth_main = -(slideWidth_main * (slides.length - 2)) / 2;
//   }else{
//     var slidesWidth_main = -(slideWidth_main * (slides.length - 1)) / 2;
//   }
//   for (let i = 0; i < slides.length; i++) 
//   {
//     slides[i].style.transform = `translateX(${slidesWidth_main}px)`;
//     slidesArrPosition.push(slidesWidth_main);
//     slidesWidth_main = slidesWidth_main + slideWidth_main;
//     //console.log(1);
//   }


// document.addEventListener("DOMContentLoaded", function() 
// {
// const arrowUp = document.getElementById("arrow_up");
// const arrowDown = document.getElementById("arrow_down");



// arrowUp.addEventListener("click", function() {
//   sliderPosition(0);
// });

// arrowDown.addEventListener("click",function() {
//   sliderPosition(1);
// });

// function sliderPosition(direction) {
//   const slider = document.querySelector(".slider");
//   if(direction === 0)
//   {
//     // нижний вверх
//     slider.prepend(slider.lastElementChild);
//     const slides = document.querySelectorAll(".slide");
//     //console.log(slidesArrPosition);
//     for (let i = 0; i < slides.length ; i++) 
//     {
//       //console.log(slidesArrPosition[i] );
//       const animation = slides[i].animate(
//         [
//           { transform: `translateX(${slidesArrPosition[i] - slideWidth_main}px)` },
//           { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
//         ],
//         {
//           duration: 500,
//           easing: 'linear'
//         }
//       );
//       animation.onfinish = () => {
//         slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
//       };
//     }
//   }else if (direction === 1)
//   {
//     // верхний вниз 
//     slider.append(slider.firstElementChild);


//     const slides = document.querySelectorAll(".slide");
//     //console.log(slidesArrPosition);
//     for (let i = 0; i < slides.length ; i++) 
//     {
//       //console.log(slidesArrPosition[i] );
//       const animation = slides[i].animate(
//         [
//           { transform: `translateX(${slidesArrPosition[i] + slideWidth_main}px)` },
//           { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
//         ],
//         {
//           duration: 500,
//           easing: 'linear'
//         }
//       );
//       animation.onfinish = () => {
//         slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
//       };
//     }
//   }
// }

// });
// }