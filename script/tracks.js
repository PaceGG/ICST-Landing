const tracks__item_left = document.getElementById('tracks__item_left');
const tracks__item_right = document.getElementById('tracks__item_right');
const tracks__separate_blocks = document.getElementById('tracks__separate_blocks');

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tracks__item_right.classList.add('show_left');
            observer3.unobserve(entry.target);
            tracks__item_left.classList.add('show_right');
            observer3.unobserve(entry.target);
        }
    });
});

observer3.observe(tracks__separate_blocks);




