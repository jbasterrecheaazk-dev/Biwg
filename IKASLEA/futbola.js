const image = document.getElementById('irudia');
image.addEventListener('mouseenter', () => {
    image.src = "IMG/athletic.png";
});
image.addEventListener('mouseleave', () => {
    image.src = "IMG/erreala.png";
});
const textop = document.getElementById('textop');
const radio = document.getElementById('radio');
const formFondo = document.querySelector('input[name="radio"]:checked');
formFondo.addEventListener("click", function() {
    if (radio.value = "12") {
        textop.style.fontSize = '12';
    } else if (radio.value="20") {
         textop.style.fontSize = '20';
    } else if (radio.value="24") {
         textop.style.fontSize = '24';
    } else {
        console.log("Error.");
    }
});