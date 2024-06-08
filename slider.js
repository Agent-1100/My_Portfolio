var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".image-slider img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');  
  }
  slides[slideIndex-1].classList.add('active');  
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.prev').addEventListener('click', function() {
      plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
      plusSlides(1);
    });
});
