window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0);
});

var faq = document.querySelectorAll('.faq');
faq.forEach((fa)=>{
  fa.addEventListener('click',()=>{
    // if(fa.classList.contains('open')){
    //   fa.classList.remove('open');
    //   fa.querySelector('.faq-icon').innerHTML='<i class="fa-duotone fa-light fa-plus"></i>';
    // }else{
    //   faq.forEach((e)=>{
    //     e.classList.remove('open');
    //     e.querySelector('.faq-icon').innerHTML='<i class="fa-duotone fa-light fa-plus"></i>';
    //   }
    //   );
    //   fa.querySelector('.faq-icon').innerHTML='<i class="fa-duotone  fa-light fa-minus"></i>';
    //   fa.classList.add('open');
    // }
    fa.classList.toggle('open');

  });
}
);
// =================== swiper ================
var width_window = window.innerWidth;
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    600:{
      slidesPerView:2 
    }
    
      
    }
  }
);
const close_menu_btn = document.getElementById('close-menu-btn');
const open_menu_btn = document.getElementById('open-menu-btn');
const menu = document.querySelector('.nav-menu');
close_menu_btn.addEventListener('click',() => {
  menu.style.display="none";
  close_menu_btn.style.display ='none';
  open_menu_btn.style.display='inline-block';
});
open_menu_btn.addEventListener('click',()=>{
  menu.style.display="flex";
  open_menu_btn.style.display='none';
  close_menu_btn.style.display ='inline-block';
});
