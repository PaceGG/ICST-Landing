
const observer_for_who = new IntersectionObserver(entries => {
    const entry = entries[0]; 
    if (entry.isIntersecting) 
    {
        document.getElementById('for_who__item_left').classList.add('for_who__item_left_animation');
        document.getElementById('for_who__item_right').classList.add('for_who__item_right_animation');
        document.getElementById('for_who__item_center').classList.add('for_who__item_center_animation');
        observer_for_who.disconnect();
    }
}, {
    rootMargin: '-200px' 
});

const elements_for_who = document.querySelector('.for_who__content');
observer_for_who.observe(elements_for_who);
