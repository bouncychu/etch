//Javascript file for etch a sketch project

//create a webpage of 16x16 grid of square divs
const gridContainer = document.querySelector('.grid-container');
let square = [];
let row = [];

for (i = 0; i < 16; i++) {
    row[i] = document.createElement('div');
    gridContainer.appendChild(row[i]);
    for (j = 0; j < 16; j++) {
        square[j] = document.createElement('div');
        square[j].setAttribute('class', 'grid-square');
        square[j].textContent = j;
        row[i].appendChild(square[j]);
    }
}