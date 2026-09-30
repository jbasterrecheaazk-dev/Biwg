const image = document.getElementById('irudia');
image.addEventListener('mouseenter', () => {
    image.src = "IMG/athletic.png";
});
image.addEventListener('mouseleave', () => {
    image.src = "IMG/erreala.png";
});