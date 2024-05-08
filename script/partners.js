
if (!isMobile)
{
    document.querySelector('.slider_box_partners').style.display = 'none';
    const content1 = document.querySelector('#partners__content1');
    const content2 = document.querySelector('#partners__content2');
    content1.addEventListener('mouseenter', pauseAnimation);
    content1.addEventListener('mouseleave', resumeAnimation);
    content2.addEventListener('mouseenter', pauseAnimation);
    content2.addEventListener('mouseleave', resumeAnimation);

    function pauseAnimation() 
    {
        content1.classList.add('paused');
        content2.classList.add('paused');
    }

    function resumeAnimation() 
    {
        content1.classList.remove('paused');
        content2.classList.remove('paused');
    }
}

if (isMobile)
{
    
    document.getElementById('partners__content1').style.display = 'none';
    document.getElementById('partners__content2').style.display = 'none';
    const slides = document.querySelectorAll(".partners_slide");
    const slideWidth = slides[0].offsetWidth;
    const marginValue = parseInt(window.getComputedStyle(slides[0]).marginLeft);
    //  console.log(marginValue);
    var slideWidth_main = slideWidth + (marginValue);
    const slidesArrPosition = [];
    if (slides.length % 2 === 0)
    {
      var slidesWidth_main = -(slideWidth_main * (slides.length - 2)) / 2 + slideWidth * 0.3;
    }else{
      var slidesWidth_main = -(slideWidth_main * (slides.length - 1)) / 2 + slideWidth * 0.3;
    }
    for (let i = 0; i < slides.length; i++) 
    {
      slides[i].style.transform = `translateX(${slidesWidth_main}px)`;
      slidesArrPosition.push(slidesWidth_main);
      slidesWidth_main = slidesWidth_main + slideWidth_main;
      //console.log(1);
    }
  
  
    const slaiderList_mobal = document.querySelector('.partners_slider');
    let startX, currentX, offsetX, direction, offsetX_prev = 0, diff = 0;
    const slaiders_mobal = Array.from(slaiderList_mobal.children);
  
    function TouchStart(e) {
      startX = e.touches[0].clientX;
      offsetX = slaiderList_mobal.scrollLeft;
    }
  
    function TouchMove(e, slides) {
      currentX = e.touches[0].clientX;
      diff = currentX - startX;
      //slaiderList_mobal.scrollLeft = offsetX - diff;
      direction = (offsetX - diff < offsetX_prev )? 1 : 0;
      offsetX_prev = offsetX - diff;
      if (direction === 1){
        for (let i = 0; i < slides.length ; i++) 
          {
            slides[i].style.transform = `translateX(${slidesArrPosition[i] + diff}px)`;
          }
      }else{
        for (let i = 0; i < slides.length ; i++) 
          {
            slides[i].style.transform = `translateX(${slidesArrPosition[i] + diff}px)`;
          }
      }
      //console.log(slides);
    }
    function TouchEnd() { 
      // вправо  
      if (direction === 1 && diff >= 70) 
      {
        slaiderList_mobal.prepend(slaiderList_mobal.lastElementChild);
        const slides = document.querySelectorAll(".partners_slide");
        //console.log(slidesArrPosition);
        
        for (let i = 0; i < slides.length ; i++) 
        {
          const animation = slides[i].animate(
            [
              { transform: `translateX(${slidesArrPosition[i] - slideWidth_main + (diff)}px)` },
              { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
            ],
            {
              duration: 300,
              easing: 'linear'
            }
          );
          animation.onfinish = () => {
            slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
          };
          //slidesArrPosition[i] = slidesArrPosition[i] + diff;
        }
      }else if(direction === 0 && diff <= -70){// влево  
        //slaiderList_mobal.append(slaiderList_mobal.firstElementChild);
        slaiderList_mobal.append(slaiderList_mobal.firstElementChild);
        const slides = document.querySelectorAll(".partners_slide");
        //console.log(1);
        //console.log(diff_main);
    
        for (let i = 0; i < slides.length ; i++) 
        {
          const animation = slides[i].animate(
            [
              { transform: `translateX(${slidesArrPosition[i] + slideWidth_main + diff}px)` },
              { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
            ],
            {
              duration: 300,
              easing: 'linear'
            }
          );
          animation.onfinish = () => {
            slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
          };
         // console.log(offsetX );
        
          //slidesArrPosition[i] = slidesArrPosition[i] - diff ;
         // console.log(slidesArrPosition[i] );
        }
      }else if (direction === 1 && diff < 70) 
        {
          const slides = document.querySelectorAll(".partners_slide");
          //console.log(slidesArrPosition);
          //console.log(diff_main);
          //console.log(diff);
          //console.log(1);
          for (let i = 0; i < slides.length ; i++) 
          {
            const animation = slides[i].animate(
              [
                { transform: `translateX(${slidesArrPosition[i] + (diff)}px)` },
                { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
              ],
              {
                duration: 300,
                easing: 'linear'
              }
            );
            animation.onfinish = () => {
              slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
            };
            //slidesArrPosition[i] = slidesArrPosition[i] + diff;
          }
        }else if(direction === 0 && diff > -70){// влево  
          //slaiderList_mobal.append(slaiderList_mobal.firstElementChild);
          const slides = document.querySelectorAll(".partners_slide");
          //console.log(1);
          //console.log(diff_main);
          //console.log(diff);
          //console.log(2);
          for (let i = 0; i < slides.length ; i++) 
          {
            const animation = slides[i].animate(
              [
                { transform: `translateX(${slidesArrPosition[i] + diff}px)` },
                { transform: `translateX(${slidesArrPosition[i]}px)`, offset: 1 } 
              ],
              {
                duration: 300,
                easing: 'linear'
              }
            );
            animation.onfinish = () => {
              slides[i].style.transform = `translateX(${slidesArrPosition[i]}px)`;
            };
           // console.log(offsetX );
          
            //slidesArrPosition[i] = slidesArrPosition[i] - diff ;
           // console.log(slidesArrPosition[i] );
          }
        }
        diff = 0;
    }
  
  
    slaiderList_mobal.addEventListener('touchstart', TouchStart);
    slaiderList_mobal.addEventListener('touchmove', (e) => TouchMove(e, document.querySelectorAll(".partners_slide")));
    slaiderList_mobal.addEventListener('touchend', TouchEnd);

}




