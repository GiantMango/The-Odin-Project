const canvas = document.querySelector(".canvas");
const changeGridButton = document.querySelector("button#change-grid");
const gridSizeInput = document.querySelector("input#grid-size");
const clearCanvasButton = document.querySelector("button#clear-canvas");
const randomColorButton = document.querySelector("button#random-mode");
const scaleColorButton = document.querySelector("button#scale-mode");
const defaultGridSize = 10;
const scaleNumber = 10;
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

scaleColorButton.addEventListener("click", () => {
    resetCanvas()
    createCanvasGrid(currentGridSize);
    draw(2);
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

            switch (mode) {
                case 0:
                    e.target.style.backgroundColor = "black";
                    break;

                case 1:
                    if (!e.target.style.backgroundColor) {
                        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
                    }
                    break;

                case 2:
                    let colors = e.target.style.backgroundColor.slice(4 ,-1).split(',');
                    if (!e.target.style.backgroundColor) {
                        e.target.style.backgroundColor = `rgb(${parseInt(255-25)}, ${255-25}, ${255-25})`
                    } else {
                        let newColor = parseInt(colors[0]) - 25;
                        if(newColor > 0) {
                            e.target.style.backgroundColor = `rgb(${newColor}, ${newColor}, ${newColor})`
                        }
                    }
                    break;
            }

        })
    })
}


function resetCanvas() {
    canvas.innerHTML = "";
}