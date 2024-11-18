const calculatorCanvas = document.querySelector(".calculator");
// const displayScreen = document.querySelector(".display-screen");
const curCalcDisplay = document.querySelector("#cur-calc");
const prevCalcDisplay = document.querySelector("#prev-calc");
const buttonCanvas = document.querySelector(".button-canvas");
const accessoryText = ['AC', '+/-', '%'];
const accessoryID = ['clear-all', 'is-neg', 'percent'];
const operatorsText = ['÷', 'x', '+', '-', '='];
const operatorsID = ['divide', 'multiply', 'add', 'subtract', 'equal'];
const digitsText = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '00'];
const rowNum = 4;
const padNum = 4;

createCalculatorCanvas()
drawButtons()

function createCalculatorCanvas() {
    for (let i = 0; i < 5; i ++) {
        const newRow = document.createElement("div");
        newRow.classList.add("flex-row", "row");
        buttonCanvas.appendChild(newRow);


        for (let j = 0; j < 4; j ++) {
            const newCell = document.createElement("div");
            const newButton = document.createElement("button");
            newCell.classList.add("button-wrappers");
            
            if (j === 3) {
                newButton.classList.add("operators");
            } else if (i == 0) {
                newButton.classList.add("accessory");
            } else {
                newButton.classList.add("digits")
            }
            
            newRow.appendChild(newCell);
            newCell.appendChild(newButton);
        }

    }

}

function drawButtons() {
    const accessoryButton = document.querySelectorAll(".accessory");
    for (let i = 0; i < accessoryButton.length; i ++) {
        accessoryButton[i].innerHTML = accessoryText[i];
        accessoryButton[i].setAttribute("id", accessoryID[i]);
    }
    const operatorsButton = document.querySelectorAll(".operators");
    for (let i = 0; i < operatorsButton.length; i ++) {
        operatorsButton[i].innerHTML = operatorsText[i];
        operatorsButton[i].setAttribute("id", operatorsID[i]);
    }

    const digitsButtons = document.querySelectorAll(".digits");
    for (let i = 0; i < digitsButtons.length; i ++) {
        digitsButtons[i].innerHTML = digitsText[i];
    }
}

var isFirst = 1;
var answer = 0;
var a = null;
var aText = '';
var b = null;
var bText = '';
var op = null;
var opCount = 0;
var equation = ''

const buttons = document.querySelectorAll("button")
buttons.forEach((e) => {
    e.addEventListener("click", (e) => {
        
        if ("digits" == e.target.classList) {
            if (a == null) {
                aText += e.target.textContent;
            } else {
                bText += e.target.textContent
            }

        } else if ("operators" == e.target.classList) {

            if (aText != '') {
                a = parseInt(aText);
                aText = '';
            } else if (bText != '') {
                b = parseInt(bText);
                bText = '';
            }

            if ('equal' != e.target.getAttribute("id")) {
                op = e.target.getAttribute("id");
                opCount = 1;
            }
        }

        if (opCount == 1) {
            a = operate(op, a, b);
            b = null;
            bText = '';
            console.log(a)
            opCount = 0;
        }

        if (e.target.getAttribute("id") == 'equal') {
            a = operate(op, a, b);
            b = null;
            bText = '';
            op = null;
            
            prevCalcDisplay.textContent = equation;
            equation = a;
            curCalcDisplay.textContent = a;
            
        } else {
            equation += e.target.textContent;
            curCalcDisplay.textContent = equation;
        }

        if ('clear-all' == e.target.getAttribute("id")) {
            clearDisplay();
        }


    })
})


function operate(op, a, b) {
    switch (op) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
    }
}


function clearDisplay() {
    curCalcDisplay.innerHTML = ''
    prevCalcDisplay.innerHTML = ''
    answer = 0;
    a = null;
    aText = '';
    b = null;
    bText = '';
    op = null;
    opCount = 0;
    equation = ''
}
