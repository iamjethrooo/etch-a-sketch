const MAIN_BOX = document.querySelector("#main-box");
let cells;
let gridSize = 16;
let colorMode = false;

function generateRandomRgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

function generateRandomGray() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  let grey = o(r() * s);
  return `rgb(${grey}, ${grey}, ${grey})`;
}

function changeColor(cell) {
  if (colorMode) {
    cell.target.style.backgroundColor = generateRandomRgba();
    return;
  }
  cell.target.style.backgroundColor = generateRandomGray();
}

function makeGrid(gridSize) {
  // Add columns and rows based on grid size
  MAIN_BOX.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  MAIN_BOX.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // Square(math) gridsize to get area
  gridSize *= gridSize;
  for (let i = 0; i < gridSize; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    // Add new elements to grid
    MAIN_BOX.appendChild(cell);
    cell.addEventListener("mouseover", changeColor);
  }
  cells = document.querySelectorAll(".cell");
}
document.addEventListener("load", makeGrid(gridSize));

const CLEAR_BUTTON = document.querySelector("#clear-button");
const RESIZE_BUTTON = document.querySelector("#resize-button");
const COLOR_BUTTON = document.querySelector("#color-mode-button");

function clearGrid() {
  console.log("cleared!");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "transparent";
  });
}

function removeCells() {
  cells.forEach((cell) => {
    MAIN_BOX.removeChild(cell);
  });
}

function resizeGrid() {
  let gridSize = prompt("Enter grid size: ");
  if (gridSize < 1) {
    alert("Invalid input");
    return;
  }
  removeCells();
  makeGrid(gridSize);
}

function changeColorMode() {
  if (COLOR_BUTTON.textContent == "Color Mode") {
    COLOR_BUTTON.textContent = "Grayscale Mode";
  } else {
    colorMode = true;
    COLOR_BUTTON.textContent = "Color Mode";
  }
}

CLEAR_BUTTON.addEventListener("click", clearGrid);
RESIZE_BUTTON.addEventListener("click", resizeGrid);
COLOR_BUTTON.addEventListener("click", changeColorMode);
