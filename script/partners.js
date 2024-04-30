
// window.addEventListener('load', function() {
//     const partnersContent = document.querySelector('.partners__content');
//     const partners = partnersContent.querySelectorAll('.partner');
//     const partners_ = partnersContent.querySelectorAll('.partner_');
//     const duration = 10000; // Продолжительность анимации в миллисекундах
//     const delay = 200; // Задержка между анимациями элементов в миллисекундах
//     const containerWidth = partnersContent.offsetWidth;
//     const partnerWidth = partners[0].offsetWidth; // Ширина одного логотипа
//     const marginLeftPercentage = 0.10; // 20% ширины контейнера для margin-left
//     const marginLeft = containerWidth * marginLeftPercentage; // Отступ слева для каждого логотипа
  
//     partners.forEach((partner, index) => {
//       const offset = index;
//       const lastPartnerOffset = (partners_.length + partners.length- 2) * (partnerWidth + marginLeft);
//       const animation = partner.animate(
//         [
//           { transform: 'translateX(0)', opacity: 1 },
//           { transform: `translateX(${-containerWidth*2}px)`, opacity: 1 },
//           { transform: `translateX(${containerWidth*2}px)`, opacity: 0, easing: 'step-end' },
//           { transform: 'translateX(0)', opacity: 1 }
//         ],
//         {
//           duration: duration,
//           delay: offset,
//           iterations: Infinity,
//           easing: 'linear'
//         }
//       );
//     });
// });
// window.addEventListener('load', function() {
//     const partnersContent = document.querySelector('.partners__content');
//     const partners_ = partnersContent.querySelectorAll('.partner_');
//     const partners = partnersContent.querySelectorAll('.partner');
//     const duration = 15000; // Продолжительность анимации в миллисекундах
//     const delay = 200; // Задержка между анимациями элементов в миллисекундах
//     const containerWidth = partnersContent.offsetWidth;
//     const partnerWidth = partners_[0].offsetWidth; // Ширина одного логотипа
//     const marginLeftPercentage = 0.10; // 20% ширины контейнера для margin-left
//     const marginLeft = containerWidth * marginLeftPercentage; // Отступ слева для каждого логотипа
  
//     partners_.forEach((partner, index) => {
//       const offset = index;
//       const lastPartnerOffset = (partners_.length + partners.length- 2) * (partnerWidth + marginLeft);
//       const animation = partner.animate(
//         [
//           { transform: 'translateX(0)', opacity: 1 },
//           { transform: `translateX(${-containerWidth*4}px)`, opacity: 1 },
//           { transform: 'translateX(0)', opacity: 0, easing: 'step-end' }
//         ],
//         {
//           duration: duration,
//           delay: offset,
//           iterations: Infinity,
//           easing: 'linear'
//         }
//       );
//     });
// });


// var k = 0;
// const container = document.querySelector('.partners__content_wrap');
// const content = document.querySelector('.partners__content');
// const partners = Array.from(document.querySelectorAll('.partner'));
// let currentPosition = 0;
// const speed = 10;
// let isFirstPartnerCloned = false; // Флаг для отслеживания клонирования первого элемента

// function movePartners() {
//   currentPosition += speed;
//   partners.forEach(partner => {
//     const rect = partner.getBoundingClientRect();
//     // Перемещаем элементы влево
//     const translation = 300 * (k + 1) - currentPosition;
//     partner.style.transform = `translateX(-${translation}px)`;

//   });

//   // Проверьте, если первый элемент вышел за пределы экрана и не был еще клонирован
//   const firstPartnerRect = partners[k].getBoundingClientRect();
//   if (firstPartnerRect.right < -500) {
//     const firstPartnerClone = partners[k].cloneNode(true);
//     content.appendChild(firstPartnerClone);
//     partners.push(firstPartnerClone);
//     content.removeChild(partners[k]);
//     k++;
//     if (k >= partners.length)
//     { 
//         k = 0;
//     } 
//   }
//   // Повторите анимацию
//   requestAnimationFrame(movePartners);
// }

// // Начните анимацию
// movePartners();
const content1 = document.querySelector('#partners__content1');
const content2 = document.querySelector('#partners__content2');
content1.addEventListener('mouseenter', pauseAnimation);
content1.addEventListener('mouseleave', resumeAnimation);
content2.addEventListener('mouseenter', pauseAnimation);
content2.addEventListener('mouseleave', resumeAnimation);

function pauseAnimation() 
{
    content1.classList.add('paused');
    content2.classList.add('paused');
}

function resumeAnimation() 
{
    content1.classList.remove('paused');
    content2.classList.remove('paused');
}




// const partnersContent1 = document.getElementById('partners__content1');
// const partnersContent2 = document.getElementById('partners__content2');

// let isDragging = false;
// let currentX;
// let initialX;
// let xOffset = 0;

// function dragStart(e) {
//     initialX = e.clientX - xOffset;
//     isDragging = true;
//     partnersContent1.classList.remove('paused');
//     partnersContent2.classList.remove('paused');
// }

// function dragEnd() {
//     isDragging = false;
//     partnersContent1.classList.add('paused');
//     partnersContent2.classList.add('paused');
// }

// function drag(e) {
//     if (isDragging) {
//         e.preventDefault();

//         currentX = e.clientX - initialX;
//         xOffset = currentX;

//         setTranslate(currentX, partnersContent1, partnersContent2);
//     }
// }

// function setTranslate(xPos, el1, el2) {
//     el1.style.left = `${xPos}px`;
//     el2.style.left = `${xPos + el1.offsetWidth}px`;
// }

// partnersContent1.addEventListener('mousedown', dragStart);
// partnersContent2.addEventListener('mousedown', dragStart);

// document.addEventListener('mouseup', dragEnd);
// document.addEventListener('mousemove', drag);