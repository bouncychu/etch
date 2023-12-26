//Javascript file for etch a sketch project

//create a webpage of 16x16 grid of square divs
const gridContainer = document.querySelector('.grid-container');
let square = [];
let row = [];

//Create grid of 16 by 16 by creating rows 16 rows and filling each row with 16 boxes
for (i = 0; i < 16; i++) {
    row[i] = document.createElement('div');
    gridContainer.appendChild(row[i]);
    for (j = 0; j < 16; j++) {
        square[j] = document.createElement('div');
        square[j].setAttribute('class', 'grid-square');
        square[j].textContent = i;
        if (i === 15 && j === 15) {
            square[j].setAttribute('class', 'grid-square-bottom-right');
        }
        else if (i === 15) {
            square[j].setAttribute('class', 'grid-square-right-end');
        }
        else if (j === 15) {
            square[j].setAttribute('class', 'grid-square-bottom-end');
        }
        row[i].appendChild(square[j]);
        square[j].addEventListener('click', function draw() {bodyTest.setAttribute('style', 'background-color: black')})
        console.log("row" + j);
    }
    console.log("column" + i);
}

// Code to change colour of squared after hover
bodyTest = document.querySelectorAll('.grid-square, .grid-square-bottom-end, .grid-square-right-end, .grid-square-bottom-right')
console.log(bodyTest);
bodyTest.forEach((e) => {
    e.addEventListener('mouseover',function draw() {e.setAttribute('style', 'background-color: black')})
})

function leftMouseDown () {
    
}