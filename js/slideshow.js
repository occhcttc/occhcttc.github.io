window.onload = setSlideShowHeight;
window.onresize = setSlideShowHeight

var slides = document.getElementsByClassName("slide");
var slideIndex = 1;

showSlides(slideIndex);
automaticSlides(1);

var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];

function setSlideShowHeight() {
    var width = slideshowContainer.clientWidth;
    console.log(width);
    var height = width / (16/9);
    slideshowContainer.style.height = height + "px";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;

    if (n > slides.length) 
        slideIndex = 1;
    if (n < 1) 
        slideIndex = slides.length ;
    for (i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";

    slides[slideIndex - 1].style.display = "block";
    
}

function automaticSlides(n) {
    var i;

    if (n > slides.length) 
        slideIndex = 1;
    if (n < 1) 
        slideIndex = slides.length ;
    for (i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";

    slideIndex++;
    if (slideIndex > slides.length) // cycle through pictures
        slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";

    setTimeout(automaticSlides, 6000);
}