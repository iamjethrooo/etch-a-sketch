const MAIN_BOX = document.querySelector("#main-box");
let cells;
let gridSize = 16;
function generateRandomRgb() {
  var o = Math.round,
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

function changeColor(cell) {
  cell.target.style.backgroundColor = generateRandomRgb();
}

function makeGrid(gridSize) {
  // Add columns and rows based on grid size
  MAIN_BOX.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  MAIN_BOX.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // Square(math) gridsize to get area
  gridSize *= gridSize;
  for (let i = 1; i <= gridSize; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    MAIN_BOX.appendChild(cell);
    cell.addEventListener("mouseover", changeColor);
  }
  cells = document.querySelectorAll(".cell");
}
document.addEventListener("load", makeGrid(gridSize));

function clearGrid() {
  console.log("cleared!");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "transparent";
  });
}

function resizeGrid() {
  let gridSize = prompt("Enter grid size: ");
  if (gridSize < 1) {
    return;
  }
  clearGrid();
  makeGrid(gridSize);
}

const CLEAR_BUTTON = document.querySelector("#clear-button");
const RESIZE_BUTTON = document.querySelector("#resize-button");
const COLOR_BUTTON = document.querySelector("color-mode-button");

CLEAR_BUTTON.addEventListener("click", clearGrid);
RESIZE_BUTTON.addEventListener("click", resizeGrid);
