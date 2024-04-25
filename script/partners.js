
window.addEventListener('load', function() {
    const partnersContent = document.querySelector('.partners__content');
    const partners = partnersContent.querySelectorAll('.partner');
    const partners_ = partnersContent.querySelectorAll('.partner_');
    const duration = 5000; // Продолжительность анимации в миллисекундах
    const delay = 200; // Задержка между анимациями элементов в миллисекундах
    const containerWidth = partnersContent.offsetWidth;
    const partnerWidth = partners[0].offsetWidth; // Ширина одного логотипа
    const marginLeftPercentage = 0.10; // 20% ширины контейнера для margin-left
    const marginLeft = containerWidth * marginLeftPercentage; // Отступ слева для каждого логотипа
  
    partners.forEach((partner, index) => {
      const offset = index * delay;
      const lastPartnerOffset = (partners_.length + partners.length- 2) * (partnerWidth + marginLeft);
      const animation = partner.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(${-lastPartnerOffset}px)` }
        ],
        {
          duration: duration,
          delay: offset,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    });
});
window.addEventListener('load', function() {
    const partnersContent = document.querySelector('.partners__content');
    const partners_ = partnersContent.querySelectorAll('.partner_');
    const partners = partnersContent.querySelectorAll('.partner');
    const duration = 5000; // Продолжительность анимации в миллисекундах
    const delay = 200; // Задержка между анимациями элементов в миллисекундах
    const containerWidth = partnersContent.offsetWidth;
    const partnerWidth = partners_[0].offsetWidth; // Ширина одного логотипа
    const marginLeftPercentage = 0.10; // 20% ширины контейнера для margin-left
    const marginLeft = containerWidth * marginLeftPercentage; // Отступ слева для каждого логотипа
  
    partners_.forEach((partner, index) => {
      const offset = index * delay;
      const lastPartnerOffset = (partners_.length + partners.length- 2) * (partnerWidth + marginLeft);
      const animation = partner.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(${-lastPartnerOffset}px)` }
        ],
        {
          duration: duration,
          delay: offset,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    },5000);
});