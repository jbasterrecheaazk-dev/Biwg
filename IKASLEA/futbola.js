const image = document.getElementById('irudia');
image.addEventListener('mouseenter', () => {
    image.src = "IMG/athletic.png";
});
image.addEventListener('mouseleave', () => {
    image.src = "IMG/erreala.png";
});
const radio = document.querySelectorAll('input[name="radio"]');
const textop = document.getElementsByClassName('textop');
//const formFondo = document.querySelector('input[name="radio"]:checked');
radio.forEach(radio => {
    radio.addEventListener("change", function() {
        textop.forEach(textop => {
             textop.style.fontSize = radio.value + "px";
        });
        /*
        if (radio.value === "12") {
           textop.style.fontSize = "12px";
        } else if (radio.value === "20") {
            textop.style.fontSize = "20px";
        } else if (radio.value === "24") {
            textop.style.fontSize = "24px";
        } else {
            console.log("Errorea.");
        }*/
    });
});

const izena = document.getElementById('izena');
const adina = document.getElementById('adina');
const balorazioa = document.getElementById('balorazioa');

const bidali = document.getElementById('bidali');
bidali.addEventListener('submit', function() {
    if (adina <= 18 || adina >= 80) {
        console.log("Errorea.");
    } else {
       console.log("Hello."); 
    }
    balorazioa.addEventListener('input', function (e) {
       this.value = this.value.replace(/[^0-9]/g, ''); 
    });
});
/*
let FormEncuesta = document.getElementsByName('FormEncuesta');
FormEncuesta.addEventListener("click", function() {
    if (adina < 18 && adina > 80) {
        console.log("Errorea.");
    }
});

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