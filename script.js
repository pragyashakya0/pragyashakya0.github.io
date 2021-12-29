var slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dotItem");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) 
  {
    slideIndex = 1;
  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}


var sIndex = 0;
slideShow();
function slideShow() {
  let i;
  let slides = document.getElementsByClassName("testslides");
  var dot = document.getElementsByClassName("dotItems");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  sIndex++;
  if (sIndex > slides.length) {sIndex = 1}    
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " active";
  setTimeout(slideShow, 3000); 
}

var menu = document.getElementById("gameMenu");
var btn = menu.getElementsByClassName("menuItem");
for(let i = 0; i<btn.length; i++){
  btn[i].addEventListener("click",function(){
  var current = menu.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  }); 
}




let games = document.getElementsByClassName("gameCard");
console.log(games)
