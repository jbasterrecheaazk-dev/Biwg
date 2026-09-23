const button = document.getElementById('colorBtn');
const back = document.getElementById('body');
button.addEventListener( "click", function () {
    console.log("Hello World");
    const colorID = 0;
    if (colorID = 0) {
        document.body.style.backgroundColor = "red";
        colorID = 1;
    } elseif (colorID = 1) {
//      "#f0f4f8"
        document.body.style.backgroundColor = "green";
        colorID = 0;
    }
});