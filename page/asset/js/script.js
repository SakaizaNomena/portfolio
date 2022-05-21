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

 
   
 
