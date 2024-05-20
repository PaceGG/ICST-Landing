//const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const isMobile = window.matchMedia("(max-width: 1000px)").matches;
const isMobile_mobile = window.matchMedia("(max-width: 500px)").matches;


if (!isMobile){
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
}


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
  

if (isMobile){
  let isAnim = false;

  function menu_active() {
    const menubar1 = document.querySelector('.menubar1');
    const menubar2 = document.querySelector('.menubar2');
    const menubar3 = document.querySelector('.menubar3');
    const nav_bar = document.querySelector('.nav-bar-mobile');
    const overlay = document.querySelector('.overlay');
    if (!isAnim) {
        nav_bar.classList.remove('nav_bar_anim_return');
        nav_bar.classList.add('nav_bar_anim');
        menubar1.classList.add('menubar1_anim');
        menubar2.classList.add('menubar2_anim');
        menubar3.classList.add('menubar3_anim');
        overlay.classList.remove('hidden');
        overlay.classList.add('show');
        isAnim = true;
    } else {
        nav_bar.classList.remove('nav_bar_anim');
        nav_bar.classList.add('nav_bar_anim_return');
        menubar1.classList.remove('menubar1_anim');
        menubar2.classList.remove('menubar2_anim');
        menubar3.classList.remove('menubar3_anim');
        overlay.classList.remove('show');
        overlay.classList.add('hidden');
        isAnim = false;
    }
  }
}