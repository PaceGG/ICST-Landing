
const rouletteButton = document.querySelector('.roulette_button');
const rouletteArr1 = document.querySelector('.roulette_arr');
const string_arr1 = Array.from(rouletteArr1.querySelectorAll('p'));
const min = 1;
const max = string_arr1.length - 1;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
var rouletteFlag = true;

rouletteButton.addEventListener('click', () => {
    if (rouletteFlag === true){
        rouletteButton.classList.add('used');
        rouletteArr1.removeChild(rouletteArr1.lastElementChild);
        const rouletteArr = document.querySelector('.roulette_arr');
        const string_arr = Array.from(rouletteArr.querySelectorAll('p'));
        const rowHeight = string_arr[0].offsetHeight + parseFloat(window.getComputedStyle(string_arr[0]).margin);
        const clonElements = [];
        string_arr.forEach((p, index) => {
        const clonstring = p.cloneNode(true);
        clonElements.push(clonstring.outerHTML);
        });
        rouletteArr.innerHTML = clonElements.join('') + rouletteArr.innerHTML;

        const offset = (randomNumber * rowHeight) + ((max - 1) * rowHeight + 5);
        rouletteArr.style.transition = 'transform 3s cubic-bezier(0.2, 0.8, 0.58, 1)';
        rouletteArr.style.transform = `translateY(${offset}px)`;
        rouletteFlag = false;
    }

});

