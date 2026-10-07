const image = document.getElementById('img1');
const picture = document.getElementById('img2');
image.addEventListener('mouseenter', () => {
    image.src = "images/animal2.jpg";
});
image.addEventListener('mouseleave', () => {
    image.src = "images/animal1.jpg";
});
picture.addEventListener('click', () => {
    image.src = "images/paisaje2.jpg";
});