// carousel 

var slidesIndex = 1;
showSlides(slidesIndex);

function plus(n){
    showSlides(slidesIndex += n);
    
}

function showSlides(n){
    var slides = document.getElementsByClassName('carousel-item');
    if(slidesIndex > slides.length) { slidesIndex = 1 }
    if (slidesIndex < 1) { slidesIndex = slides.length}
    for(let i = 0; i < slides.length ; i++ ){
        slides[i].style.display = 'none';
    }
    slides[slidesIndex - 1].style.display = 'block';
}


// modal image
var modal = document.getElementById("myModal");

var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i = 0 ; i < img.length ; i++){
    
    img[i].onclick = function(){
      modal.style.display = "block";
      modalImg.src = img[i].src;
      captionText.innerHTML = img[i].alt;
      
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = 'none';
  }
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.backgroundColor = "black";
    document.getElementById("nav").style.padding = "10px 0";
  } else {
    document.getElementById("nav").style.backgroundColor = "";
    document.getElementById("nav").style.padding = "";
  }
}