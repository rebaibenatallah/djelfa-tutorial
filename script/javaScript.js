// -1 header code
function svgDown(elem){
  var button_svg = document.querySelectorAll(".header-button-svg-down");
  if(elem.lastChild.previousElementSibling.classList.contains("header-button-svg-down-rotate")){
    elem.lastChild.previousElementSibling.classList.remove("header-button-svg-down-rotate");
  }else{ 
    button_svg.forEach((element) => element.classList.remove("header-button-svg-down-rotate"));
    elem.lastChild.previousElementSibling.classList.add("header-button-svg-down-rotate");
  }
  header_show_div();
}
// show and hiding div 
function header_show_div(){
  var x =document.getElementById("catalog-menu-dropdown");
  if(x.classList.contains('active')){
    x.classList.remove('active');
  }else{
    x.classList.add('active');
  }
}
//  end header code