// ==========================================
// 1. URRATSA: API HELBIDEA ETA HTML KAXAK
// ==========================================

// 1. Gorde JSON Server-aren helbidea aldagai batean (http://localhost:3000/players)
const API_URL = "http://localhost:3000/players";

// 2. Hartu HTMLko taula ("tableBody") eta formularioa ("formPlayer")

const table = document.getElementById('tableBody');
const formulator = document.getElementById('formPlayer');

// 3. Hartu formularioko lauki guztiak euren ID-a erabiliz: 
// id, name, password, age, city, points, typePlayer
/*
 <input type="hidden" id="id">
    <input type="text" id="name" placeholder="Name" required>
    <input type="password" id="password" placeholder="Password" required>
    <input type="number" id="age" placeholder="Age" required>
    <input type="text" id="city" placeholder="City" required>
    <input type="number" id="points" placeholder="Points" required>
    <select id="typePlayer">
*/

const id = document.getElementById('id');
const name = document.getElementById('name');
const password = document.getElementById('password');
const age = document.getElementById('age');
const city = document.getElementById('city');
const points = document.getElementById('points');
const typePlayer = document.getElementById('typePlayer');

// ======================================================
// 2. URRATSA: JOKALARIAK IRAKURRI ETA TAULAN ERAKUTSI
// ======================================================
async function getPlayers() {
    // 1. Fetch erabiliz API-ari datuak eskatu  db.json
    
    const p = await fetch(API_URL);
    
    // 2. Erantzuna JSON (zerrenda) bihurtu
    
    const lista = await p.json;
    
    // 3. Taula garbitu (innerHTML = ""), datuak ez errepikatzeko
    
    table.innerHTML = "";
    
    // 4. Zerrendako jokalari bakoitzeko, forEach erabiliz:
    
    array.forEach(lista => {
        const tr = document.createElement('tr');

        // A. Fila edo hilara bat (tr) sortu document.createElement erabiliz
        
        // B. Hilararen barruan (innerHTML) zutabeak (td) idatzi jokalariaren datuekin. 
        // Baita ere bi botoi jarri: <button class="btn-editatu">Editatu</button> eta ezabatzeko bestea.
        const name = document.createElement('td');
        name.innerText = lista.name;

        const age = document.createElement('td');
        age.innerText = lista.age;

        const city = document.createElement('td');
        city.innerText = lista.city;

        const points = document.createElement('td');
        points.innerText = lista.points;

        const type = document.createElement('td');
        type.innerText = lista.type;

        const button = document.createElement('td');

        const edit = document.createElement('button');
        edit.id = edit;

        const remove = document.createElement('button');
        remove.id = remove;

        button.appendChild(edit);
        button.appendChild(remove);

        // C. Hilara horren barruko bi botoiak hartu (querySelector erabiliz)
        
        const editbutton = document.querySelector('#edit');
        const deletebutton = document.querySelector('#remove');

        // D. Botoiei "click" gertaera (addEventListener) gehitu:
        // - Editatu botoiak prepareEdit(jokalaria) exekutatuko du.
        // - Ezabatu botoiak deletePlayer(jokalaria.id) exekutatuko du.
        
        editbutton.addEventListener('click', () => {
            prepareEdit(p);
        });

        // E. Hilara taulan (tableBody) sartu appendChild erabiliz

        tr.appendChild(name);
        tr.appendChild(age);
        tr.appendChild(city);
        tr.appendChild(points);
        tr.appendChild(type);
        tr.appendChild(age);
        tr.appendChild(name);
        tr.appendChild(age);

    }); 
}


// ==========================================
// 3. URRATSA: JOKALARIA GORDE EDO EGUNERATU
// ==========================================
formPlayer.addEventListener("submit", async function(event) {
    // 1. Orria automatikoki kargatzea saihestu (preventDefault)
    

    // 2. Formularioko laukien datuekin jokalari berriaren objektua (paketea) sortu
    

    // 3. Egiaztatu ID laukia hutsik dagoen:
    // - Hutsik badago: jokalari BERRIA sortu (POST eskaera API_URL helbidera)
    // - Hutsik ez badago: jokalaria EGUNERATU (PUT eskaera API_URL/id helbidera)
    

    // 4. Formularioa garbitu (reset) eta ezkutuko ID laukia ere hustu
    
    
    // 5. Taula berriro kargatu (getPlayers)
    
});


// ==========================================
// 4. URRATSA: JOKALARIA EZABATU
// ==========================================
async function deletePlayer(id) {
    // 1. Fetch erabiliz API-ari ID hori ezabatzeko eskatu (DELETE metodoa erabiliz)
    
    
    // 2. Taula berriro kargatu (getPlayers)
    
}


// ==========================================
// 5. URRATSA: EDITATZEKO PRESTATU
// ==========================================
function prepareEdit(jokalaria) {
    // 1. Formularioko laukietan (value) jokalariaren datuak bete
    
    
    // 2. Pasahitza hutsik utzi segurtasunagatik
    
}


// ==========================================
// PROGRAMAREN HASIERA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Orria irekitzean, datuak kargatzeko funtzioari deitu (getPlayers)
    
});