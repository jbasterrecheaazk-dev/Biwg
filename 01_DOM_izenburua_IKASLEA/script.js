// 1. HTMLko izenburua hautatzen dut. id="izenburua" alert(izena);
const izena = document.getElementById('izenburua');
console.log(izena);

// 2. HTMLko botoia hautatzen dut. id="botoia"
const boton = document.getElementById('botoia');
console.log(boton);

// 3. Izenburua aldatzeko funtzioa sortzen dut.
// 3. Izenburuaren kolorea aldatzeko funtzioa sortzen dut.
function IzenburuaAldatu() {
    console.log(boton);
    //alert("Botoia sakatu da");
    //izena.textContent = "Hola Mundo.";
    izena.style.color = "red";
}

// 4. Botoia sakatzean funtzioa exekutatzen dut. 
boton.addEventListener( "click", function () {
    IzenburuaAldatu();
});
