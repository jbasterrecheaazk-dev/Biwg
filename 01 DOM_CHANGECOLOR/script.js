const button = document.getElementById('colorBtn');
const back = document.getElementById('body');
const colorID = 1;
button.addEventListener( "click", function () {
//  console.log("Hello World");
    if (colorID = 0) {
        document.body.style.backgroundColor = "red";
        colorID = 1;
    } 
    else if (colorID = 1) {
      "#f0f4f8"
        document.body.style.backgroundColor = "green";
        colorID = 0;
    }
});