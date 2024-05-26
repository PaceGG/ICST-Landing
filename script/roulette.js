
const rouletteButton = document.querySelector('.roulette_row');
const rouletteArr1 = document.querySelector('.roulette_arr');
const string_arr1 = Array.from(rouletteArr1.querySelectorAll('p'));
const min = 1;
const max = string_arr1.length - 1;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//const randomNumber = 15;
var rouletteFlag = true;

rouletteButton.addEventListener('click', () => {
    if (rouletteFlag === true){
        rouletteArr1.removeChild(rouletteArr1.lastElementChild);
        const rouletteArr = document.querySelector('.roulette_arr');
        const string_arr = Array.from(rouletteArr.querySelectorAll('p'));
        const margin_p = parseFloat(window.getComputedStyle(string_arr[0]).marginTop);
        const rowHeight = string_arr[0].offsetHeight + margin_p;
        const clonElements = [];
        string_arr.forEach((p, index) => {
        const clonstring = p.cloneNode(true);
        clonElements.push(clonstring.outerHTML);
        });
        rouletteArr.innerHTML = clonElements.join('') + rouletteArr.innerHTML;

        const offset = (randomNumber * rowHeight) + ((max - 1) * rowHeight + 5) - margin_p/4;
        rouletteArr.style.transition = 'transform 3s cubic-bezier(0.2, 0.8, 0.58, 1)';
        rouletteArr.style.transform = `translateY(${offset}px)`;
        rouletteFlag = false;
    }

});

if (!isMobile){
  const roulButton = document.querySelector('.roulette_button');
  const rouletteH2 = document.getElementById('roulette_flag_button');
  const button_text1 = document.getElementById('roulette_button_text1');
  const button_text2 = document.getElementById('roulette_button_text2');
  const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
      if (entry.isIntersecting || (entry.boundingClientRect.top < 0 && entry.boundingClientRect.bottom > 0)) 
      {
        roulButton.style.bottom = '';
        roulButton.href = 'https://www.gosuslugi.ru/10077/1/form'; // новая ссылка
        roulButton.classList.add('roulette_animation_button');
        button_text1.classList.add('roulette_animation_button_text1');
        button_text2.classList.add('roulette_animation_button_text2');
        roulButton.classList.remove('menu-link');

      } else if(entry.boundingClientRect.top >= 0){
        roulButton.style.bottom = '80px';
        button_text1.classList.remove('roulette_animation_button_text1');
        button_text2.classList.remove('roulette_animation_button_text2');
        button_text2.style.opacity = 0;
        button_text1.style.opacity = 1;
        roulButton.href = '#roulette_href';
        roulButton.classList.remove('roulette_animation_button');
        roulButton.classList.add('menu-link');
      }
    });
  });
  observer.observe(rouletteH2);
}

if (isMobile){
  const roulButton = document.querySelector('.roulette_button');
  roulButton.href = 'https://www.gosuslugi.ru/10077/1/form'; // новая ссылка
}