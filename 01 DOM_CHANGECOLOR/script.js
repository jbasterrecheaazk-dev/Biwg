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

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
});
button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '';
    button.style.color = '';
});