function navbar_href(elem){
  var value = elem.nextElementSibling.classList;
  // console.log(elem.lastChild.previousElementSibling);
  if(value.contains('active')){
    value.remove('active');
    elem.lastChild.previousElementSibling.classList.remove('active');
  }else{
    value.add('active');
    elem.lastChild.previousElementSibling.classList.add('active');
  }
}