var onMenu = false;
var high = true;
document.addEventListener("DOMContentLoaded", function() 
{
    var menu = document.getElementById('menu');
    var timer;
    window.addEventListener("scroll", function() 
    {
        clearTimeout(timer);
        if (window.scrollY === 0) 
        {
            high = true;
            return; // пользователь в самом верху страницы то не скрывать
        }else{
            high = false;
        }
        if(!high){
            menu.style.transform = "translateY(0)";
            menu.style.transition = "transform 0.5s ease"; 
            timer = setTimeout(function(){
                menu.style.transform = "translateY(-130%)";
            }, 3000);
            //console.log(timer);
        }
    });
    
// для отслеживания мыши ( если наведена то не скрывать )
    menu.addEventListener("mouseenter", function() {// мышь на меню 
        onMenu = true;
    });
    menu.addEventListener("mouseleave", function() {// мышь ливнула
    //console.log(timer);
        if(!high){
            onMenu = false;
            timer = setTimeout(function() 
            {
                menu.style.transform = "translateY(-130%)";
            }, 3000); 
        }
    });
    
    
    
    // чтобы если мышка вверху меню само вылазило без скрола
    document.addEventListener("mousemove", function(event) {
        if (event.clientY < window.innerHeight / 10) {
            
            if (onMenu) {// мышь на меню 
                clearTimeout(timer); 
                menu.style.transform = "translateY(0)";
            }else{
                if(!high){
                    menu.style.transform = "translateY(0)";
                    clearTimeout(timer);
                    timer = setTimeout(function(){
                        menu.style.transform = "translateY(-130%)";
                    }, 3000);
                    //console.log(timer);
                }
            }
        }
    });
});



/* для работы меню*/
document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu-link');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        scrollTo(targetElement); 
        closeMobileMenu(); 
      });
    });
    function scrollTo(element) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
      });
    }
    function closeMobileMenu() {
      const mobileMenu = document.getElementById('menu');
      mobileMenu.classList.remove('active');
    }
  });
  