document.addEventListener("DOMContentLoaded",function(){

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500); // Change image every 4 seconds
}
function imgSlider(anything) {
    document.querySelector('.image').src = anything;
}
function changeColor(color) {
    const cerc = document.querySelector('.cerc');
    cerc.style.background = color;
}
});

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
}

