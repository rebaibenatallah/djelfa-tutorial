window.onscroll = function() {scrollFunction()};
const header = document.querySelector('.header');

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}