
let humanScore = 0;
let computerScore = 0;

const paperImg = "https://cdn11.bigcommerce.com/s-2i5mq6440u/images/stencil/2048x2048/products/3762/9095/PlasticPaper-CutSheet__18809.1597757191.png?c=2";
const scissorsImg = "https://www.ikea.com/ca/en/images/products/svartfisk-kitchen-scissors-stainless-steel-black__1215188_pe911902_s5.jpg?f=xl";
const rockImg = "https://cdn-hgmij.nitrocdn.com/uwlPXoysYPxhfaCezxmZtaumClejIefR/assets/images/optimized/rev-0c309e7/stoneplus.com/wp-content/uploads/2020/06/Rocky-Mountain-Boulder-1-jpg-1000x1000.webp";

const humanChoiceImg = document.querySelector(".human>.img-wrap>img");
const commputerChoiceImg = document.querySelector(".computer>.img-wrap>img");
const resultText = document.querySelector(".result");
const humanScoreText = document.querySelector("#you-score")
const computerScoreText = document.querySelector("#com-score")


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        choice =  "rock";
    } else if (choice == 1) {
        choice =  "paper";
    } else {
        choice =  "scissors";
    }

    displaySelectionImage(choice, commputerChoiceImg);
    return choice;
}


const selectionButtons = document.querySelector(".buttons")
selectionButtons.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    const humanChoice = e.target.id.toLowerCase();
    displaySelectionImage(humanChoice, humanChoiceImg);
    playRound(humanChoice, computerChoice)
});

function displaySelectionImage(selection, imgElement) {
    switch(selection) {
        case "rock":
            imgElement.setAttribute("src", rockImg);
            break;
        case "paper":
            imgElement.setAttribute("src", paperImg);
            break;
        case "scissors": 
            imgElement.setAttribute("src", scissorsImg);
            break;
    }
}


function playRound(you, com) {
    if (you === com) {
        resultText.textContent = ("It's a tie👔");
    } else if (you.length < com.length || com.length - you.length > 1) {
        resultText.textContent = ("You Lose 🙁");
        computerScore += 1;
        computerScoreText.textContent = computerScore;
    } else {
        resultText.textContent = ("You Win! 🎉");
        humanScore += 1;
        humanScoreText.textContent = humanScore;
    }
}