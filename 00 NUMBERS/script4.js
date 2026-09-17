const mainButton = document.getElementById('btnNew');
if (mainButton) {
    const tableContainer = document.querySelector('.table-container');
const table = document.createElement('table');
let tr = document.createElement('tr');
let count = 0;
for (let index = 0; index <= 50; index+=2) {
    if (count === 5) {
        table.appendChild(tr);
        tr = document.createElement('tr');
        count = 0;
    }
    const td = document.createElement('td');
    td.textContent = index;
    tr.appendChild(td);
    count++;
}

if (count > 0) {
    table.appendChild(tr);
}
tableContainer.appendChild(table);
}
