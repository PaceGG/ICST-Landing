if (!isMobile_mobile){
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

}


if (isMobile_mobile){
    const tracks__item_left = document.getElementById('tracks__item_left');
    const tracks__item_right = document.getElementById('tracks__item_right');
    const tracks__item1 = document.getElementById('tracks__item1');
    const tracks__item2 = document.getElementById('tracks__item2');
    tracks__item_right.classList.remove('hidden_right');
    tracks__item_right.classList.add('hidden_left');

    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tracks__item_left.classList.add('show_left');
                observer3.unobserve(entry.target);
            }
        });
    });

    observer3.observe(tracks__item1);

    const observer_tracks_1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tracks__item_right.classList.add('show_left');
                observer_tracks_1.unobserve(entry.target);
            }
        });
    });

    observer_tracks_1.observe(tracks__item2);
}

