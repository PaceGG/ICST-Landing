
if (!isMobile){
  function showModal() 
  {
    setTimeout(function() {
      document.getElementById("modal-message").classList.add("show_modal"); 
    }, 1000); 
  }
  function closeModal() 
  {
    document.getElementById("modal-message").classList.remove("show_modal");
  }
  window.onload = showModal;

  window.addEventListener("scroll", function() {
      //console.log(((window.innerHeight + window.scrollY)*0.1));
      //console.log(document.body.offsetHeight);
    var modal = document.getElementById("modal-message");
    if (((window.innerHeight + window.scrollY)+10) >= document.body.offsetHeight) {
      modal.classList.add("show_modal");
    }
  }); 
}

if (isMobile){
  //document.getElementById('message').innerHTML = 'Если у вас остались вопросы, <br> то пишите нам!';
  document.querySelector('.close-button').remove();
}