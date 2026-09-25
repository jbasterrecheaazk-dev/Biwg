const button = document.getElementById('colorBtn');
// const back = document.getElementById('body');
let colorID = 0;
button.addEventListener( "click", function () {
    console.log("Hello World");
    
    if (colorID === 0) {
        document.body.style.backgroundColor = "lightblue";
       colorID = 1;
    } 
    else if (colorID === 1) {
//      "#f0f4f8"
        document.body.style.backgroundColor = "lightgreen";
        colorID = 0;
    }
});
const caja = document.getElementById('colorBtn');
caja.addEventListener('Mouse is in', () => {
    caja.style.backgroundColor = 'red';
    caja.style.color = 'white';
});
caja.addEventListener('Mouse is out', () => {
    caja.style.backgroundColor = '';
    caja.style.color = '';
});