//Function to create a grid of 16 x 16
//Outer loop is rows, inner loop is columns
//So, row 0, it will go down the column
//For every index, create element in the DOM as a div
//Give the div a class name of squareDiv
//Append that div to the rowDiv for flex
//Return the nodelist of the squares, so return every square

function createGrid(){
    const gridContainer = document.querySelector('.gridContainer');
    const rows = 16;
    const cols = 16;
    

    for (let i = 0; i < rows; i++){
        const rowDiv = document.createElement('div');
        for (let j = 0; j < cols; j++){
            const square = document.createElement('div');
            square.classList.add('squareDiv');
            rowDiv.appendChild(square);
        }
        gridContainer.appendChild(rowDiv);
    }

    return gridContainer.querySelectorAll('.squareDiv');
}

//Function that takes in gridSquares, I used the createGrid function.
//createGrid() returns all the squares.
//For each square, add an event listener on the mouseenter event.
//Uses a callback function. For every square it will check the mouseenter and assign the
//background color of the square to pink.

function hoverOverSquareFromGrid(gridSquares){

    let selectedColor = '';

    //Made easier. Now, i iterate through the nodelist for colorbuttons. 
    //And every button i do an eventlistener. When i click it changes a function scope variable to
    //whatever the textcontent is of the button. This would for a list as well.

    const colorButtons = document.querySelectorAll('.colorButton');
    colorButtons.forEach(function(btn){
        btn.addEventListener('click', function(e){ //registers callback to happen when click happens
            selectedColor = e.currentTarget.textContent;
        });
    });

    

    gridSquares.forEach(function(square){
        square.addEventListener('mouseenter', function(e){
            e.currentTarget.style.background = selectedColor;
        });
    });
}

function clearButton(gridSquares){
    const clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', function(){
        gridSquares.forEach(function(square){
            square.style.background = 'white';
        });
    });
}


const squares = createGrid();
hoverOverSquareFromGrid(squares);
clearButton(squares);