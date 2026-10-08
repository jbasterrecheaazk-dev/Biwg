const image = document.getElementById('irudia');
image.addEventListener('mouseenter', () => {
    image.src = "IMG/athletic.png";
});
image.addEventListener('mouseleave', () => {
    image.src = "IMG/erreala.png";
});
const radio = document.querySelectorAll('input[name="radio"]');
const textop = document.querySelectorAll('textop');
//const formFondo = document.querySelector('input[name="radio"]:checked');
radio.forEach(radio => {
    radio.addEventListener("change", function() {
        textop.forEach(textop => {
             textop.style.textop.fontSize = radio.value + "px";
        });
        /*
        if (radio.value === "12") {
           textop.style.textop.fontSize = "12px";
        } else if (radio.value === "20") {
            textop.style.textop.fontSize = "20px";
        } else if (radio.value === "24") {
            textop.style.textop.fontSize = "24px";
        } else {
            console.log("Errorea.");
        }
        */
    });
});

const izena = document.getElementById('izena');
const adina = document.getElementById('adina');
const balorazioa = document.getElementById('balorazioa');

const bidali = document.getElementById('bidali');

const bakarrikInt = (e) => {
        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    };
    if (adina) adina.addEventListener('keypress', bakarrikInt);
    if (balorazioa) balorazioa.addEventListener('keypress', bakarrikInt);
    if (condition) {
        bidali.addEventListener('submit', function() {
            e.preventDefault();
            let adinaZenbakia = parseInt(
                adina.value, 10
            );
            let balorazioZenbakia = parseInt(
                balorazioa.value, 10
            );
            ('return').
            if (isNaN(adinaZenbakia) || adinaZenbakia <= 18 || adinaZenbakia >= 80) {
                alert("Errorea.");
                console.log("Errorea.");
                return;
            };
            if (isNaN(balorazioZenbakia) || balorazioZenbakia <= 18 || balorazioZenbakia >= 80) {
                alert("Errorea.");
                console.log("Errorea.");
                return;
            };
            alert("Formularioa bidali da..");
        });
    }
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