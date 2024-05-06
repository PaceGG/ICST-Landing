/* анимация снизу вверх появления*/
const faculties__item1 = document.getElementById('faculties__item1');
const faculties__item2 = document.getElementById('faculties__item2');
const faculties__item3 = document.getElementById('faculties__item3');
const faculties__item4 = document.getElementById('faculties__item4');
const itemsToObserve = [
    faculties__item1,
    faculties__item2,
    faculties__item3,
    faculties__item4
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

if (isMobile){
    itemsToObserve2.forEach(item => {
        item.classList.remove("hidden_left_right");
        item.classList.add("hidden");
    });
}

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!isMobile){
                entry.target.classList.add('show_left_right');
                observer2.unobserve(entry.target);
            }else{
                entry.target.classList.add('show');
                observer2.unobserve(entry.target);
            }
        }
    });
});


itemsToObserve2.forEach(item => {
    observer2.observe(item);
});

