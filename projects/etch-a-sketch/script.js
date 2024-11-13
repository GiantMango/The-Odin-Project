const canvas = document.querySelector(".canvas");
const changeGridButton = document.querySelector("button#change-grid");
const gridSizeInput = document.querySelector("input#grid-size");
const clearCanvasButton = document.querySelector("button#clear-canvas");
const randomColorButton = document.querySelector("button#random-mode");
const defaultGridSize = 10;
let currentGridSize = defaultGridSize;

createCanvasGrid(defaultGridSize);
draw();


changeGridButton.addEventListener("click", () => {
    resetCanvas();
    currentGridSize = gridSizeInput.value
    createCanvasGrid(currentGridSize);
    draw();
})

clearCanvasButton.addEventListener("click", () => {
    resetCanvas();
    createCanvasGrid(currentGridSize);
    draw();
})

randomColorButton.addEventListener("click", () => {
    resetCanvas();
    createCanvasGrid(currentGridSize);
    draw(1);
})

function createCanvasGrid(gridSize){
    for (let i = 0; i < gridSize; i ++) {
        let newRow = document.createElement("div")
        newRow.classList.add("row", "flex-row");
        canvas.appendChild(newRow);
        for (let j = 0; j < gridSize; j ++) {
            let newCell = document.createElement("div");
            newCell.classList.add("cell");
            newRow.appendChild(newCell);
        }
    }
}


function draw(mode = 0) {
    let cells = document.querySelectorAll(".cell")
    cells.forEach((e) => {
        e.addEventListener("mouseover", (e) => {
            if (mode == 0) {
                e.target.style.backgroundColor = "black";
            } else {
                e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
            }
            
        })
    })
}


function resetCanvas() {
    canvas.innerHTML = "";
}