/* анимация снизу вверх появления*/
const faculties__item1 = document.getElementById('faculties__item1');
const faculties__item2 = document.getElementById('faculties__item2');
const faculties__item3 = document.getElementById('faculties__item3');
const faculties__item4 = document.getElementById('faculties__item4');
const curruculum__item1 = document.getElementById('curruculum__item1');
const curruculum__item2 = document.getElementById('curruculum__item2');
const curruculum__item3 = document.getElementById('curruculum__item3');
const itemsToObserve = [
    faculties__item1,
    faculties__item2,
    faculties__item3,
    faculties__item4,
    curruculum__item1,
    curruculum__item2,
    curruculum__item3
];

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer1.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '-70px 0px 0px 0px' 
});


itemsToObserve.forEach(item => {
    observer1.observe(item);
});

/* анимация слево напрво*/
const advantages__text__title1 = document.getElementById('advantages__text__title1');
const advantages__text__title2 = document.getElementById('advantages__text__title2');
const advantages__text__title3 = document.getElementById('advantages__text__title3');
const advantages__text__title4 = document.getElementById('advantages__text__title4');
const advantages__text__title5 = document.getElementById('advantages__text__title5');
const advantages__text__title6 = document.getElementById('advantages__text__title6');
const advantages__text__p1 = document.getElementById('advantages__text__p1');
const advantages__text__p2 = document.getElementById('advantages__text__p2');
const advantages__text__p3 = document.getElementById('advantages__text__p3');
const advantages__text__p4 = document.getElementById('advantages__text__p4');
const advantages__text__p5 = document.getElementById('advantages__text__p5');
const advantages__text__p6 = document.getElementById('advantages__text__p6');
const itemsToObserve2 = [
    advantages__text__title1,
    advantages__text__title2,
    advantages__text__title3,
    advantages__text__title4,
    advantages__text__title5,
    advantages__text__title6,
    advantages__text__p1,
    advantages__text__p2,
    advantages__text__p3,
    advantages__text__p4,
    advantages__text__p5,
    advantages__text__p6

];

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show_left_right');
            observer2.unobserve(entry.target);
        }
    });
});


itemsToObserve2.forEach(item => {
    observer2.observe(item);
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
  