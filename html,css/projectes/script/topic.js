window.onscroll = function() {scrollFunction()};
const header = document.querySelector('.header');

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

// third content box
const btns =document.querySelectorAll('.btns-category .btn');
const pages = document.querySelectorAll('.pages> *');
btns.forEach((btn,index)=>{
  btn.addEventListener('click',(e)=>{
    btns.forEach((btn)=>{
      btn.classList.remove('active');
    });
    btn.classList.add('active');
    var line = document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    console.log(line);
    line.style.left = e.target.offsetLeft + "px";
    pages.forEach((page)=>{
      page.classList.remove('active');
    });
    pages[index].classList.add('active');
  });
});