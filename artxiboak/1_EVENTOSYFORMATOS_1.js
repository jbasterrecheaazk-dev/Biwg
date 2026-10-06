const image = document.getElementById('img1');
image.addEventListener('mouseenter', () => {
    image.src = "images/animal2.jpg";
});
image.addEventListener('mouseleave', () => {
    image.src = "images/animal1.jpg";
});