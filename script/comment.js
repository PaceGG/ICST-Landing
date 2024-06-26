

if (!isMobile_mobile) {
  document.addEventListener('DOMContentLoaded', function() {
      var showMoreButtons = document.querySelectorAll('.show-more-button');
      showMoreButtons.forEach(function(button){
          button.remove();
      });
  });
}
if (!isMobile) {
const commentList = document.querySelector('.comment_list');
const comments = document.querySelectorAll('.comment');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const points = document.querySelectorAll('.comment_point');
let curIndex = 0;
const commentWidth = comments[0].offsetWidth;
const viewWidth = document.querySelector('.comment_view').offsetWidth;
function showcomment(index) 
{
  commentList.style.transform = `translateX(-${index * 100}%)`;
  curIndex = index;
  updateArrowVisibility();
  updatepoints();
}
function showNextcomment() 
{
  if (curIndex < comments.length - 1) {
    showcomment(curIndex + 1);
  }
}
function showPrevcomment() 
{
  if (curIndex > 0) {
    showcomment(curIndex - 1);
  }
}
function updateArrowVisibility() 
{
  arrowLeft.style.opacity = curIndex === 0 ? '0.3' : '1';
  arrowRight.style.opacity = curIndex === comments.length - 1 ? '0.3' : '1';
}

function updatepoints() {
  points.forEach((point, index) => {
    point.classList.toggle('active', index === curIndex);
  });
}

showcomment(curIndex);
}
const avatar = document.getElementById("comment_avatar2");
const avatarImg1 = document.getElementById("avatar_img21");
const avatarImg2 = document.getElementById("avatar_img22");
let rotated = true;
let isAnimating = false; 

avatar.addEventListener("click",function() {
  if (!isAnimating) 
  { 
    isAnimating = true; 

    avatar.classList.add('comment_avatar_animation');
    setTimeout(function() {
      if (rotated) 
      {
        avatarImg1.style.display = 'none';
        avatarImg2.style.display = 'block';
        rotated = false;
      } else {
        avatarImg2.style.display = 'none';
        avatarImg1.style.display = 'block';
        rotated = true;
      }

    }, 250);

    avatar.addEventListener('animationend',function handleAnimationEnd(event) {
      if (event.target === avatar) 
      {
        avatar.classList.remove('comment_avatar_animation');
        isAnimating = false; 
        avatar.removeEventListener('animationend',handleAnimationEnd); 
      }
    }, { once: true }); 

  }
});



if (isMobile) {
  document.addEventListener('DOMContentLoaded', function() {
    var showMoreButtons = document.querySelectorAll('.show-more-button');
    showMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var commentText = this.previousElementSibling;
            commentText.classList.toggle('expanded');
            if (commentText.classList.contains('expanded')) {
                this.textContent = 'Скрыть';
            } else {
                this.textContent = 'Показать больше';
            }
            showMoreButtons.forEach(function(btn) {
                var txt = btn.previousElementSibling;
                txt.classList.toggle('expanded', commentText.classList.contains('expanded'));
                btn.textContent = commentText.classList.contains('expanded') ? 'Скрыть' : 'Показать больше';
            });
        });
    });
});

  
  const commentList_mobal = document.querySelector('.comment_list');
  let startX, currentX, offsetX, direction, targetIndex_prev = 0, diff = 0;
  let currentIndex = 0;
  const comments_mobal = Array.from(commentList_mobal.children);
  const maxIndex = comments_mobal.length - 1;

  comments_mobal.forEach((comment, index) => {
    comment.style.flexShrink = '0';
    comment.style.width = `${commentList_mobal.offsetWidth}px`;
  });

  function TouchStart(e) {
    startX = e.touches[0].clientX;
    offsetX = commentList_mobal.scrollLeft;
  }

  function TouchMove(e) {

    currentX = e.touches[0].clientX;
    diff = currentX - startX;
    commentList_mobal.scrollLeft = offsetX - diff;
    direction = (diff > 0 )? 1 : 0;
    //offsetX_prev = offsetX - diff;
    //console.log(diff);
  }

  function TouchEnd() {
    const width = commentList_mobal.offsetWidth;
    if(diff === 0){

    }else if (direction === 1) 
    {
      var targetIndex = Math.round((commentList_mobal.scrollLeft - width / 2) / width);
      //console.log(diff);
      if (diff < 100 && targetIndex_prev !== 0){
        ++targetIndex;
      }
      const scrollDistance = targetIndex * width - commentList_mobal.scrollLeft;
      //console.log(targetIndex);
      commentList_mobal.scrollBy({
        left: scrollDistance,
        behavior: 'smooth'
      });
      currentIndex = targetIndex;
      updatePoints();
      //console.log(targetIndex);
      // console.log(commentList_mobal.scrollLeft);
    }else{
      var targetIndex = Math.round((commentList_mobal.scrollLeft + width / 2) / width);
      //console.log(targetIndex);
      //console.log(width);
      //console.log(direction);
      if (diff > -100){
        --targetIndex;
      }
     // console.log(targetIndex);
      targetIndex = (targetIndex <= maxIndex )? targetIndex : maxIndex;
      commentList_mobal.scrollTo({
        left: targetIndex * width,
        behavior: 'smooth'
      });
      currentIndex = targetIndex;
      updatePoints();
      // console.log('left');
      // console.log(commentList_mobal.scrollLeft);
    }
    targetIndex_prev = targetIndex;
    diff = 0;
  }

  function updatePoints() {
    const indicators = document.querySelectorAll('.comment_point');
    indicators.forEach((indicator, index)=> {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  commentList_mobal.addEventListener('touchstart', TouchStart);
  commentList_mobal.addEventListener('touchmove', TouchMove);
  commentList_mobal.addEventListener('touchend', TouchEnd);
}