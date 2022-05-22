window.onload=()=>{
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");
    let active = document.querySelector(".active");
    let target = active.dataset.target;

    affiche();
    document.querySelector(target).classList.add("show");
    console.log(tabs.length)
    
    function affiche(){
        for(let tab of tabs)
        {
           if(tab !==active)
           {
               tab.addEventListener("click", tabClick);
               tab.classList.remove("active");
           }
        }
        for(content of contents){
            content.classList.remove("show");
        }
    }
    

    function tabClick(){
        target = this.dataset.target;
        active = this;
        this.classList.add("active");
        this.removeEventListener("click", tabClick);

        affiche();
       document.querySelector(target).classList.add("show");

    }
 
}
 //commende pour les balise compétences
 var slide_index = 1;
 slidesDisplay(slide_index);
 function nextSlide(n) {
 slidesDisplay(slide_index += n);
 }
 function currentSlide(n) {
 slidesDisplay(slide_index = n);
 }
 function slidesDisplay(n) {
 var i;
 var slides = document.getElementsByClassName("p_competence");
 if (n > slides.length) { slide_index = 1 }
 if (n < 1) { slide_index = slides.length }
 for (i = 0; i < slides.length; i++) {
 slides[i].style.display = "none";
 }
 slides[slide_index - 1].style.display = "block";
 }
//slide automatique des elements realisation
/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 30000); // Change image every 2 seconds
}
  */
var slide_index = 1;
slidesDispla(slide_index);
function nextSlid(n) {
slidesDispla(slide_index += n);
}
function currentSlide(n) {
slidesDispla(slide_index = n);
}
function slidesDispla(n) {
var i;
var slide = document.getElementsByClassName("carouselContainer");
if (n > slide.length) { slide_index = 1 }
if (n < 1) { slide_index = slide.length }
for (i = 0; i < slide.length; i++) {
slide[i].style.display = "none";
}
slide[slide_index - 1].style.display = "block";
}
 
//jjjjjjjjjjjjjjjjjjj

var slide_index = 1;
slidesDispl(slide_index);
function nextSli(n) {
slidesDispl(slide_index += n);
}
function currentSlide(n) {
slidesDispl(slide_index = n);
}
function slidesDispl(n) {
var i;
var slid = document.querySelectorAll(".slider");
if (n > slid.length) { slide_index = 1 }
if (n < 1) { slide_index = slid.length }
for (i = 0; i < slid.length; i++) {
slid[i].style.display = "none";
}
slid[slide_index - 1].style.display = "block";
}

 

 
