const image = document.getElementById('img1');
const picture = document.getElementById('img2');
image.addEventListener('mouseenter', () => {
    image.src = "images/animal2.jpg";
});
image.addEventListener('mouseleave', () => {
    image.src = "images/animal1.jpg";
});

picture.addEventListener('click', () => {
    if (picture.src.includes('images/paisaje1.jpg')) {
    picture.src = 'images/paisaje2.jpg';
} else {
   picture.src = 'images/paisaje1.jpg';
}   
});
const middleDiv = document.getElementById('middleDiv');
middleDiv.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});
middleDiv.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});
const middle = document.getElementsByClassName('middle');
middle.addEventListener('click', () => {

});