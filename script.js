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


function myMenu(n,type){
  let games = document.getElementsByClassName("gameCard");

  for (let i = 0; i < games.length; i++) {
    let gameType = games[i].getAttribute("data-game-type");

    if (gameType === type) {
      games[i].style.display = "block";
    } 
    else 
    {
      games[i].style.display = "none";
    }
  }
}




function gameBtn(id){
  let modal =document.querySelectorAll(".gamePopup");
  let closeBtn = document.getElementsByClassName("close");
  console.log(closeBtn)
  console.log(modal)
  for(let i = 0;  i<modal.length; i++){
    let modalId = modal[i].id;
    if(id === modalId){
    modal[i].style.display ="block";
      
      if(modal[i]){

      closeBtn.onclick = function(){
      modal[i].style.display ="none";
      }

}



    window.onclick = function(event) {
    if (event.target == modal[i]) {
    modal[i].style.display = "none";
  }
}
}

 

    




}
}


// var modal = document.querySelector(".gamePopup");
// var btn = document.getElementById("marioCard");
// var closeBtn = document.getElementsByClassName("close")[0];

// btn.onclick = function(){
//   modal.style.display="block";
// }

// closeBtn.onclick = function(){
//   modal.style.display ="none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal[i].style.display = "none";
//   }
// }



// const modal = document.querySelector('#gamePopup');
// const popup =document.getElementById("gamePopup")
// const gameCard = document.querySelector('#marioCard');
// const closeBtn = document.querySelector('.close');


// gameCard.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);



// function openModal() {
//   // window.addEventListener('click', outsideClick);
//   // console.log("run")
//   modal.style.display = 'block';
// }

// function closeModal() {
//   modal.style.display = 'none';
//   // window.removeEventListener('click', outsideClick);
// }


// function outsideClick(e) {
//     const popup = document.getElementById("gamePopup");
//     let targetelement = e.target;
//     console.log(targetelement)

//     do{
//       if(targetelement === popup ){
//           modal.style.display = 'none';
//       }
//       targetelement = targetelement.parentnode;
//     }
//     while(targetelement);
//       modal.style.display = 'none';

//   }

  // console.log(e.target, 'logg',popup )
  // var pop = popup.contains(e.target);

  // console.log(pop)
  // if(!pop){
  //   modal.style.display = 'none';
  // }

  //  window.removeEventListener('click', outsideClick);

//   if (e.target == gamePopup ) {
//     modal.style.display = 'none';
//   }
//}
// && modal.style.display === "block"











function subscribe()
{
  document.getElementById("subscribe").style.display = "block";
  document.getElementById("form").style.display = "none";
}


const gameList = 
[
     {
        "Image": "/img/supermariobros.png",
        "name": "Super Mario"
    },

    {
        "Image": "/img/excitebike.png",
        "name": "Excite Bike"
    },

    { 
        "Image": "/img/pacman.png",
        "name": "Pacman"
    },
  
    {
        "Image": "/img/castlevania.png",
        "name": "Castlvania"
    },
  
    {
        "Image": "/img/image 5.png",
        "name": "Duck Hunt"
    },

    {
        "Image": "/img/image 4.png",
        "name": "The Legend of Zelda"
    },

    {
        "Image": "/img/image 3.png",
        "name": "Mega Man"
    }
];

