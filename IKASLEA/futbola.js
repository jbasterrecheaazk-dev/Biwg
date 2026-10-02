const image = document.getElementById('irudia');
image.addEventListener('mouseenter', () => {
    image.src = "IMG/athletic.png";
});
image.addEventListener('mouseleave', () => {
    image.src = "IMG/erreala.png";
});
const textop = document.querySelectorAll('textop');
const radios = document.querySelectorAll('input[name="radio"]');
//const formFondo = document.querySelector('input[name="radio"]:checked');
radios.forEach(radio => {
    radio.addEventListener("click", function() {
        
        if (radio.value === "12" || radio.value === "Txikia") {
            textop.forEach(textop => textop.style.fontSize = '12px');
        } else if (radio.value === "20" || radio.value === "Ertaina") {
            textop.forEach(textop => textop.style.fontSize = '20px');
        } else if (radio.value === "24" || radio.value === "Handia") {
            textop.forEach(textop => textop.style.fontSize = '24px');
        } else {
            console.log("Errorea.");
        }
    });
});

const izena = document.getElementById('izena');
const adina = document.getElementById('adina');

/*
formFondo.addEventListener("click", function() {
    radio.forEach(radio => {
        
    });
    /*if (radio.value = "12") {
        textop.style.fontSize = '12';
    } else if (radio.value="20") {
         textop.style.fontSize = '20';
    } else if (radio.value="24") {
         textop.style.fontSize = '24';
    } else {
        console.log("Error.");
    }
});
*/
