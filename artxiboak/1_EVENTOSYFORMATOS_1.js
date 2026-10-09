const image = document.getElementById('img1');
const picture = document.getElementById('img2');
image.addEventListener('mouseenter', () => {
    image.src = "images/animal2.jpg";
});
image.addEventListener('mouseleave', () => {
    image.src = "images/animal1.jpg";
});

picture.addEventListener('click', () => {
    if (picture.src.includes('images/paisaje1.jpg')) {
    picture.src = 'images/paisaje2.jpg';
} else {
   picture.src = 'images/paisaje1.jpg';
}   
});
const middleDiv = document.getElementById('middleDiv');
const middle = document.getElementsByClassName('.middle');
const bottomDiv = document.getElementById('bottomDiv');
middleDiv.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
});
middleDiv.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});
const colection = {
    "animal2.jpg": ["animal1.jpg", "animal2.jpg", "animal3.jpg"],
    "paisaje2.jpg": ["paisaje1.jpg", "paisaje2.jpg", "paisaje3.jpg"],
    "persona2.jpg": ["persona1.jpg", "persona2.jpg", "persona3.jpg"]
};

middle.forEach(img => {
    img.addEventListener('click', ()=> {
        bottomDiv.innerHTML = "";
        const fileName = img.src.split('/').pop();
        const imageGroup = colection[fileName] || [];
        imageGroup.forEach(route => {
            const newImg = document.createElement('img');
            newImg.src = img + route;
            newImg.addEventListener('click', ()=> {
                alert("Click egin duzu argazkiari");
                const ventana = window.open("", "", "width=800,height=600");
                    ventana.document.write(`
                        <body style = "text-align:center;">
                        <img src="${route}" style="max-width:90%;"><br>
                        <button onclick="window.close()">Done</button>
                        </body>
                        `);
            });
            bottomDiv.appendChild(newImg);
        })
    });
});