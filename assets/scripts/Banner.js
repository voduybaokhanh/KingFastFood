let slideIndex = 1;
let slideInterval;

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
}

function plusSlides(n) {
    clearTimeout(slideInterval);
    showSlides((slideIndex += n));
    slideInterval = setTimeout(autoSlides, 3000);
}

function currentSlide(n) {
    clearTimeout(slideInterval);
    showSlides((slideIndex = n));
    slideInterval = setTimeout(autoSlides, 3000);
}

function autoSlides() {
    plusSlides(1);
}

window.onload = function () {
    showSlides(slideIndex);
    slideInterval = setTimeout(autoSlides, 3000);
};