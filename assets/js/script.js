const squaresContainer = document.querySelector(".squares");
const colors = ["blue", "yellow", "green", "red", "orange", "purple", "aqua", "grey"];
const colorsPicklist = [...colors, ...colors];
const squareCount = colorsPicklist.length;

// Game start
let revealedCount = 0;
let activeSquare = null;
let awaitingEndOfMove = false;

// Build up squares
for (let i = 0; i < squareCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    const square = buildSquare(color);

    console.count(square);
    squaresContainer.appendChild(square);

}

// Create squares
function buildSquare(color) {
    const element = document.createElement("div");

    element.classList.add("square");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    return element;

}

element.addEventListener("click", () => {
    const revealed = element.getAttribute("data-revealed");

    if (
        awaitingEndOfMove
        || revealed === "true"
        || element == activeSquare
    ) {
        return;
    }

    // Show color
    element.style.backgroundColor = color;

    if (!activeSquare) {
        activeSquare = element;

        return;
    }

    const colorToMatch = activeSquare.getAttribute("data-color");
