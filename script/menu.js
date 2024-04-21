var onMenu = false;
document.addEventListener("DOMContentLoaded", function() 
{
    var menu = document.getElementById('menu');
    var timer;
    window.addEventListener("scroll", function() 
    {
        clearTimeout(timer);
        if (window.scrollY === 0) 
        {
            return; // пользователь в самом верху страницы то не скрывать
        }
        menu.style.transform = "translateY(0)";
        menu.style.transition = "transform 0.5s ease"; 
        timer = setTimeout(function(){
            menu.style.transform = "translateY(-100%)";
        }, 3000);
        //console.log(timer);
    });
    
// для отслеживания мыши ( если наведена то не скрывать )
    menu.addEventListener("mouseenter", function() {// мышь на меню 
        onMenu = true;
    });
    menu.addEventListener("mouseleave", function() {// мышь ливнула
    //console.log(timer);
        onMenu = false;
        timer = setTimeout(function() 
        {
            menu.style.transform = "translateY(-100%)";
        }, 3000); 
    });
    
    
    
    // чтобы если мышка вверху меню само вылазило без скрола
    document.addEventListener("mousemove", function(event) {
        if (event.clientY < window.innerHeight / 10) {
            
            if (onMenu) {// мышь на меню 
                clearTimeout(timer); 
                menu.style.transform = "translateY(0)";
            }else{
            
                menu.style.transform = "translateY(0)";
                clearTimeout(timer);
                timer = setTimeout(function(){
                    menu.style.transform = "translateY(-100%)";
                }, 3000);
                //console.log(timer);
            }
        }
    });
});
