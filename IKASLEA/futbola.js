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
            document.querySelector('textop').style.fontSize = '12px';
            /*textop.forEach(textop => textop.style.fontSize = '12px');*/
        } else if (radio.value === "20" || radio.value === "Ertaina") {
            document.querySelector('textop').style.fontSize = '20px';
            /*textop.forEach(textop => textop.style.fontSize = '20px');*/
        } else if (radio.value === "24" || radio.value === "Handia") {
            document.querySelector('textop').style.fontSize = '24px';
            /*textop.forEach(textop => textop.style.fontSize = '24px');*/
        } else {
            console.log("Errorea.");
        }
    });
});

const izena = document.getElementById('izena');
const adina = document.getElementById('adina');
const balorazioa = document.getElementById('balorazioa');
const bidali = document.getElementById('bidali');
bidali.addEventListener("click", function() {
    if (adina < 18 && adina > 80) {
        console.log("Errorea.");
    }
});
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
