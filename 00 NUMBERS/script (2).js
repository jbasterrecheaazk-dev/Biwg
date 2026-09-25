const tableContainer = document.querySelector('.table-container');
const table = document.createElement('table');
let tr = document.createElement('tr');
let result = "";
let i = 0;
let o = 0;
while (i <= 50) {
    if (i%2==0) {
      
      result = result + i + " "
      o++;
      if (o % 5 === 0) {
        result += "\n";
      }
    }
    //let number = 5;
    //let binary = number.toString(2);
    i++
};
console.log(result);