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
const caja = document.getElementById('hoverBox');
    caja.style.width = '500px';
    caja.style.height = '500px';
    caja.style.position = "fixed";
caja.addEventListener('mouseenter', () => {
    caja.style.backgroundColor = 'lightyellow';
    caja.style.width = "";
    caja.style.height = "";
    caja.textContent = "Mouse is in";
    caja.style.position = "";
    caja.style.fontSize = '';
//  caja.style.color = 'white';
});
caja.addEventListener('mouseleave', () => {
    caja.style.backgroundColor = '';
    caja.style.width = '500px';
    caja.style.height = '500px';
    //caja.style.position = '';
    caja.style.position = "fixed";
    caja.style.fontSize = '1.5rem';
    caja.textContent = "Mouse is out";
//  caja.style.color = '';
});