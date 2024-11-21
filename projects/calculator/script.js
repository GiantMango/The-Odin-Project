const calculatorCanvas = document.querySelector(".calculator");

const botCalcDisplay = document.querySelector("#cur-calc");
const topCalcDisplay = document.querySelector("#prev-calc");
const buttonCanvas = document.querySelector(".button-canvas");
const accessoryText = ["AC", "Del", "%"];
const accessoryID = ["clear-all", "del", "percent"];
const operatorsText = ["÷", "x", "+", "-"];
const operatorsID = ["divide", "multiply", "add", "subtract"];
const digitsText = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  ".",
  "0",
  "00",
];
const rowNum = 5;
const padNum = 4;
const opRegex = /[÷x\+\-]/g;
const priOpRegex = /[÷x]/g;
const decimalLimit = 10000000;
var eqPointer = 0;
var eqStack = [[], [], []];
var answer = [];

createCalculatorCanvas();
drawFunctionalButtons();

// UI Functions
function createCalculatorCanvas() {
  for (let i = 0; i < rowNum; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("flex-row", "row");
    buttonCanvas.appendChild(newRow);

    for (let j = 0; j < padNum; j++) {
      const newCell = document.createElement("div");
      const newButton = document.createElement("button");
      newCell.classList.add("button-wrappers");

      if (j == padNum - 1 && i == rowNum - 1) {
        newButton.classList.add("equal");
        newButton.innerHTML = "=";
        newButton.setAttribute("id", "equal");
        newButton.onclick = () => equal();
      } else if (j == padNum - 1) {
        newButton.classList.add("operators");
      } else if (i == 0) {
        newButton.classList.add("accessory");
      } else {
        newButton.classList.add("digits");
      }

      newRow.appendChild(newCell);
      newCell.appendChild(newButton);
    }
  }
}

function drawFunctionalButtons() {
  const accessoryButton = document.querySelectorAll(".accessory");
  for (let i = 0; i < accessoryButton.length; i++) {
    accessoryButton[i].innerHTML = accessoryText[i];
    accessoryButton[i].setAttribute("id", accessoryID[i]);
  }

  accessoryButton[0].onclick = () => clearDisplay();
  accessoryButton[1].onclick = () => deleteText();
  accessoryButton[2].onclick = () => percentage();

  const operatorsButton = document.querySelectorAll(".operators");
  for (let i = 0; i < operatorsButton.length; i++) {
    operatorsButton[i].innerHTML = operatorsText[i];
    operatorsButton[i].setAttribute("id", operatorsID[i]);
    operatorsButton[i].onclick = () => appendToDisplay(operatorsText[i]);
  }

  const digitsButtons = document.querySelectorAll(".digits");
  for (let i = 0; i < digitsButtons.length; i++) {
    digitsButtons[i].innerHTML = digitsText[i];
    digitsButtons[i].onclick = () => appendToDisplay(digitsText[i]);
  }
}

function appendToDisplay(s) {
  formatEqStack(s);
  console.log("eqStack: ", eqStack);

  // redraw display
  renewDisplay();
}

function calculate() {
  let eqStackFlat = eqStack.map((e) => e.join(""));
  let percentageIndex = eqStackFlat.map((e) => e.includes("%"));
  console.log(percentageIndex);
  let isEmpty = eqStackFlat.reduce((acc, cur) => {
    return acc || cur == "";
  }, false);

  if (isEmpty) {
    answer = percentageIndex[0]
      ? parseFloat(eqStackFlat[0]) / 100
      : parseFloat(eqStackFlat[0]);
  } else {
    answer = operate(
      eqStackFlat[1],
      percentageIndex[0]
        ? parseFloat(eqStackFlat[0]) / 100
        : parseFloat(eqStackFlat[0]),
      percentageIndex[2]
        ? parseFloat(eqStackFlat[2]) / 100
        : parseFloat(eqStackFlat[2])
    );
  }

  answer = Math.round(answer * decimalLimit) / decimalLimit;

  topCalcDisplay.textContent = eqStackFlat.join("");
  botCalcDisplay.textContent = answer;

  return answer;
}

function formatEqStack(s) {
  eqStack[eqPointer].push(s);
  switch (eqPointer) {
    // num 1
    case 0:
      // console.log("IN CASE 0");
      if (answer.length != 0 && digitsText.includes(s)) {
        answer = [];
        eqStack[0] = [s];
      }

      if (eqStack[0].length == 1 && operatorsText.includes(s) && s != "-") {
        // console.log("IN CASE 0, FIRST IF");
        eqStack[0].pop();
      } else if (
        eqStack[0][0] == "-" &&
        operatorsText.includes(eqStack[0][1])
      ) {
        // console.log("IN CASE 0, FIRST ELSE");
        eqStack[0].pop();
      } else if (
        eqStack[0].slice(0, eqStack[0].length - 1).includes(".") &&
        s == "."
      ) {
        // console.log("IN CASE 0, SECOND ELSE");
        eqStack[0].pop();
      }

      if (
        ((eqStack[0][0] == "-" && eqStack[0].length > 1) ||
          (eqStack[0][0] != "-" && eqStack[0].length > 0)) &&
        operatorsText.includes(s)
      ) {
        // console.log("IN CASE 0, SECOND IF");
        eqPointer += 1;
        let op = eqStack[0].pop();
        eqStack[1].push(op);
      }
      break;

    // operator
    case 1:
      // console.log("IN CASE 1");
      if (eqStack[1].length > 1 && operatorsText.includes(s) && s != "-") {
        // console.log("IN CASE 1 IF");
        eqStack[1].shift();
      } else if (s == "-" || digitsText.includes(s)) {
        eqPointer += 1;
        let next = eqStack[1].pop();
        eqStack[2].push(next);
        // console.log("sending to case 2");
      }
      break;

    // num2
    case 2:
      if (eqStack[2].length == 1 && operatorsText.includes(s) && s != "-") {
        // console.log("IN CASE 2, FIRST IF");
        eqStack[2].pop();
      } else if (
        eqStack[2][0] == "-" &&
        operatorsText.includes(eqStack[2][1])
      ) {
        // console.log("IN CASE 2, FIRST ELSE");
        eqStack[2].pop();
      } else if (
        eqStack[2].slice(0, eqStack[2].length - 1).includes(".") &&
        s == "."
      ) {
        // console.log("IN CASE 0, SECOND ELSE");
        eqStack[2].pop();
      }

      if (
        ((eqStack[2][0] == "-" && eqStack[2].length > 1) ||
          (eqStack[2][0] != "-" && eqStack[2].length > 0)) &&
        operatorsText.includes(s)
      ) {
        // console.log("IN CASE 2, SECOND IF");
        let op = eqStack[2].pop();
        answer = calculate();
        eqStack = [[], [], []];
        eqStack[1].push(op);
        eqStack[0].push(answer);
      }
      break;
  }
  console.log("eqPointer: ", eqPointer);
  console.log("eqStack: ", eqStack);
}

function equal() {
  answer = calculate();
  topCalcDisplay.textContent = eqStack.flat().join("");
  botCalcDisplay.textContent = answer;
  resetEqStack();
  eqStack[0] = answer.toString().split("");
}

function percentage() {
  if (eqPointer != 1 && !eqStack[eqPointer].includes("%")) {
    eqStack[eqPointer].push("%");
  }
  renewDisplay();
}

// Helper Functions
function operate(op, a, b) {
  // console.log("OPERATE (OP, a, b) = (", op, a, b, ")");
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "÷":
      if (b == 0) {
        botCalcDisplay.textContent = "Can't divide by 0";
        throw new Error("Can't divide by 0");
      } else {
        return a / b;
      }
  }
}

function clearDisplay() {
  resetEqStack();
  resetAnswer();
  botCalcDisplay.textContent = "";
  topCalcDisplay.textContent = "";
}

function deleteText() {
  while (eqStack[eqPointer].length == 0) {
    eqPointer -= 1;
    if (eqPointer < 0) {
      eqPointer = 0;
      break;
    }
  }
  eqStack[eqPointer].pop();
  renewDisplay();
}

function renewDisplay() {
  botCalcDisplay.textContent = eqStack.flat().join("");
}

function resetEqStack() {
  eqPointer = 0;
  eqStack = [[], [], []];
}

function resetAnswer() {
  answer = [];
}
