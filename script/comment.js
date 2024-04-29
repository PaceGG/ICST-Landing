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
  arrowLeft.style.display = curIndex === 0 ? 'none' : 'block';
  arrowRight.style.display = curIndex === comments.length - 1 ? 'none' : 'block';
}

function updatepoints() {
  points.forEach((point, index) => {
    point.classList.toggle('active', index === curIndex);
  });
}

showcomment(curIndex);


const avatar = document.getElementById("comment_avatar2");
const avatarImg1 = document.getElementById("avatar_img21");
const avatarImg2 = document.getElementById("avatar_img22");
let rotated = true;

avatar.addEventListener("click", function() {
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
  
  avatar.addEventListener('animationend', function(event) 
  {
    if (event.target === avatar) 
    {
      avatar.classList.remove('comment_avatar_animation');
    }
  });
});


