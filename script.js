const xButton = document.querySelector('.mobile-menu button');

xButton.addEventListener('click', function(){
  document.querySelector('.mobile-menu').classList.add('d-none');
})

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
  document.querySelector('.mobile-menu').classList.remove('d-none');
})