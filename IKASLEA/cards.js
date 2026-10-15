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
  const cards1 = document.getElementById('container-cards1');
  const cards2 = document.getElementById('container-cards2');
  div1 = "";
  div2 = "";
  cards1.style.border = "solid";
  cards1.style.display = "flex";
  cards1.style.flexDirection = "row";
  cards1.style.justifyContent = "space-between";
  cards1.style.margin = "auto";
  cards1.style.flexWrap = "wrap";
  cards1.style.width = "300px";
  cards1.style.height = "200px";

  cards2.style.border = "solid";
  cards2.style.display = "flex";
  cards2.style.flexDirection = "row";
  cards2.style.justifyContent = "space-between";
  cards2.style.margin = "auto";
  cards2.style.flexWrap = "wrap";
  cards2.style.width = "300px";
  cards2.style.height = "200px";
  /*
  cards1.style.margin = "auto";
  cards1.style.maxWidth = "30em";
  cards1.style.maxHeight = "20em";
  cards2.style.margin = "auto";
  cards2.style.maxWidth = "300px";
  cards2.style.maxHeight = "300px";
  */
  bigDogs.forEach((dog,index) => {
    /*
    document.cards.style.height = '100px';
    */
    divs1 = `<div class="cards">
    <a href="details.html?id=${index}">
    <img src = "${dog.image}" alt = "${dog.breed}">
    <h2>${dog.breed}</h2>
    </a>
    <h1></h1>
    </div>`;
    div1 = div1 + divs1;
    console.log(div1);
  });
  cards2.innerHTML = div1;
  smallDogs.forEach((dog,index) => {
    div2 = `<div class="cards">
    <a href="details.html?id=${index}">
    <img src = "${dog.image}" alt = "${dog.breed}">
    <h2>
    ${dog.breed}
    </h2>
    </a>
    <h1>

    </h1>
    </div>`;
    console.log(div2);
  });
  /*
    <button onclick="window.close()">Done</button>
    */
    cards1.innerHTML = div2;