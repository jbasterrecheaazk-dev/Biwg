const bigDogs = [
  {
    breed: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    weight: "25 - 34 kg",
    height: "55 - 61 cm",
    characteristics: "Intelligent, friendly, affectionate and very sociable.",
    suitableOwners: "Ideal for families with children and active people."
  },
   {
    breed: "German Shepherd",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95",
    weight: "22 - 40 kg",
    height: "55 - 65 cm",
    characteristics: "Protective, loyal, brave and highly intelligent.",
    suitableOwners: "Perfect for sporty people or security-related work."
  },
  {
    breed: "Siberian Husky",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea",
    weight: "20 - 27 kg",
    height: "50 - 60 cm",
    characteristics: "Energetic, independent and resilient.",
    suitableOwners: "Perfect for very active people and sports lovers."
  }];

  const smallDogs = [
  {
    breed: "French Bulldog",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    weight: "8 - 14 kg",
    height: "28 - 33 cm",
    characteristics: "Calm, playful and an excellent companion.",
    suitableOwners: "Ideal for apartment living and calm people."
  }
];

const details = document.getElementById('dog-details');

alert (window.location.href);

let dog1 = "";
let dog2 = "";
let dog3 = "";
let dog4 = "";

bigDogs.forEach((dog, index) => {
  dog1 += `
    <div id="dog-details">
    <a href="details.html? type=small&id=${index}">
    <img src="${dog.image}" alt ="${dog.breed}" style = "">
    <h2>${dog.breed}</h2>
    </a>
    </div> `;
});
bigDogs.forEach((dog, index) => {
  dog2 += `
    <div id="dog-details">
    <a href="details.html? type=small&id=${index}">
    <img src="${dog.image}" alt ="${dog.breed}" style = "">
    <h2>${dog.breed}</h2>
    </a>
    </div> `;
});
bigDogs.forEach((dog, index) => {
  dog3 += `
    <div id="dog-details">
    <a href="details.html? type=small&id=${index}">
    <img src="${dog.image}" alt ="${dog.breed}" style = "">
    <h2>${dog.breed}</h2>
    </a>
    </div> `;
});
smallDogs.forEach((dog, index) => {
  dog4 += `
    <div id="dog-details">
    <a href="details.html? type=small&id=${index}">
    <img src="${dog.image}" alt ="${dog.breed}" style = "">
    <h2>${dog.breed}</h2>
    </a>
    </div> `;
});

details.innerHTML = dog3;
/*
const container1 = document.getElementById('container-cards1');
const container2 = document.getElementById('container-cards2');
function estiloakEman(elementua) {
  elementua.style.border = "solid 1px #ccc";
  elementua.style.display = "flex";
  elementua.style.flexDirection = "row";
  elementua.style.justifyContent = "space-start";
  elementua.style.margin = "auto";
  elementua.style.flexWrap = "wrap";
  elementua.style.maxWidth = "100%"; 
  elementua.style.gap = "10px";
  elementua.style.padding = "10px";
}

estiloakEman(container1);
estiloakEman(container2);

let htmlsmallDogs = "";
let htmlbigDogs = "";

  smallDogs.forEach((dog,index) => {
    document.cards.style.height = '100px';
    
    htmlsmallDogs += `
    <div class="card" style = "text-align: center;">
    <a href="details.html? type=small&id=${index}">
    <img src="${dog.image}" alt ="${dog.breed}" style = "">
    <h2>${dog.breed}</h2>
    </a>
    </div> `;
  });

  bigDogs.forEach((dog,index) => {
    htmlbigDogs += `
    <div class="card" style = "text-align: center;">
    <a href="details.html? type=big&id=${index}">
    <img src="${dog.image}" alt ="${dog.breed}" style = "">
    <h2>${dog.breed}</h2>
    </a>
    </div> `;
  });
  container1.innerHTML = htmlsmallDogs;
  container2.innerHTML = htmlbigDogs;
  */