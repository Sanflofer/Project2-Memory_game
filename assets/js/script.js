const container = document.querySelector(".container");
let cards [];
let firstCard, seconCard;
let lockBoard = false;
let score = 0;

var color = ["aqua", "blue", "blueviolet", "brown", "chartreuse", "cornflowerblue", "darkgreen", "darkorange"];
var randomChosenColor = color[newSequence];

function newSequence() {
    var randomNumber = Math.floor(Math.random() * 8);
}

//--flip cards--//
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;

    checkMatch();
}

//--check match--//
var color = ["aqua", "blue", "blueviolet", "brown", "chartreuse", "cornflowerblue", "darkgreen", "darkorange"];
let firstCard = document.getElementsByClassName("cell");
let secondCard = Math.floor(Math.random() * 8);

function checkMatch() {
    if (firstCard === secondCard) {
        flipCard;
        score++;
        document.querySelector(".score").textContent = score;
    } else {
        disableCards();
        unflipCards();
        score++;
        document.querySelector(".score").textContent = score;
    }
}

function restart() {
    resetBoard();
    score = 0;
    document.querySelector(".score").textContent = score;
}