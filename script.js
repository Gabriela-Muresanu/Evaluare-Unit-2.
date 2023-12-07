var buton = document.getElementById("button");
var nume = document.getElementById("nume");
var body = document.getElementById("body");
var prenume = document.getElementById("prenume");
var imagine = document.getElementById("imagine");



// script.js
let slideIndex = 1;
let slideshowRunning = false;

function startSlideshow() {
    if (!slideshowRunning) {
        document.getElementById('slideshowTitle').innerText = 'Slideshow Running';
        showSlides(slideIndex);
        slideshowRunning = true;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(() => {
        plusSlides(1);
    }, 3000); // Change slide every 3 seconds
}
