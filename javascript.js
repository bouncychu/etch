//Javascript file for etch a sketch project

let gridLength = 16;

mainContainer = document.querySelector('.main-container');
canvasSize = document.querySelector('#canvas-size');
canvasSize.addEventListener('click', () => {
    gridContainer.innerHTML = "";
    do {
        gridLength = prompt ("Enter number of squares per side for new grid between 1 and 100: ")
     } while (gridLength < 1 || gridLength > 100)
    mainContainer.appendChild(gridContainer);
    gridSize(gridLength);
})

//write function to draw in random colour
let randomColor = function () {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color.toString();
  }
  
  const rainbowMode = document.querySelector('#rainbow');
  let rainbowOnSwitch = "off";
  rainbowMode.addEventListener('click', () => {
    gridContainer.innerHTML = "";
    mainContainer.appendChild(gridContainer);
    gridSize(gridLength);
    if (rainbowOnSwitch === "off") {
        rainbowOnSwitch = "on";
        console.log("rainbow switch is " + rainbowOnSwitch);
    }
    else if (rainbowOnSwitch === "on") {
        rainbowOnSwitch = "off";
        console.log("rainbow switch is " + rainbowOnSwitch);
    }
  })
  

//create a webpage of 16x16 grid of square divs
const gridContainer = document.querySelector('.grid-container');
let square = [];
let row = [];

//Create grid of 16 by 16 by creating rows 16 rows and filling each row with 16 boxes
let gridSize = function getGridSize(length) {
    for (i = 0; i < gridLength; i++) {
        row[i] = document.createElement('div');
        row[i].setAttribute('class', 'flex-row');
        gridContainer.appendChild(row[i]);
        for (j = 0; j < gridLength; j++) {
            square[j] = document.createElement('div');
            square[j].setAttribute('class', 'grid-square');
            if (i === gridLength - 1 && j === gridLength - 1) {
                square[j].setAttribute('class', 'grid-square-bottom-right');
            }
            else if (i === gridLength - 1) {
                square[j].setAttribute('class', 'grid-square-right-end');
            }
            else if (j === gridLength - 1) {
                square[j].setAttribute('class', 'grid-square-bottom-end');
            }
            row[i].appendChild(square[j]);
            square[j].addEventListener('click', function draw() {bodyTest.setAttribute('style', 'background-color: black')})
            console.log("row" + j);
        }
        console.log("column" + i);
    }
    // Code to change colour of squared after hover
    const draw = document.querySelectorAll('.grid-square, .grid-square-bottom-end, .grid-square-right-end, .grid-square-bottom-right')
    console.log(draw);
    draw.forEach((e) => {
        if (rainbowOnSwitch === "off") {
            e.addEventListener('mouseover',function draw() {e.setAttribute('style', 'background-color: black')});
        }
        else if (rainbowOnSwitch === "on") {
            e.addEventListener('mouseover',function draw() {e.setAttribute('style', `background-color: ${randomColor()}`)});
        }
    })
}

gridSize();