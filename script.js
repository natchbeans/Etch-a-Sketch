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


}

createGrid();