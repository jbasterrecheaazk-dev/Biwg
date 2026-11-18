const mainnav = document.querySelectorAll('.main-nav');
const navinmuebles = document.getElementById('nav-inmuebles');
const navagencia = document.getElementById('nav-agencia');
const secagencia = document.getElementById('sec-agencia');
/*const sections = document.querySelectorAll('.section-wrap');*/

sections = document.getElementsByClassName('section-wrap');

sections.classList.remove('active');

if (navinmuebles) {
    navinmuebles.classList.add('active');
}



/*
sections.adde
sections.forEach(sections => sections.classList.remove('active'));

productos.forEach(function(producto) {
  console.log(producto.nombre);
});
 / Hide all slides
        const slides = document.querySelectorAll('.slide-card');
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show selected slide
        const activeSlide = document.getElementById('slide-' + slideId);
        if (activeSlide) {
            activeSlide.classList.add('active');
        }*/