const MAIN_BOX = document.querySelector("#main-box");

function makeGrid(gridSize) {
  MAIN_BOX.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  MAIN_BOX.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridSize *= gridSize;
  for (let i = 0; i < gridSize; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    MAIN_BOX.appendChild(cell);
  }
}

document.addEventListener("load", makeGrid(4));
