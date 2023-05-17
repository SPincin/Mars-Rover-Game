let gridCreated = document.getElementById("gridContainer");
const roverEmoji = "\u{1F6F8}";
let rowNumber;
let columnNumber;
let roverCoordinates;

const randomStart = () => {
  const randomRow = getRandomNumber(rowNumber);
  const randomColumn = getRandomNumber(columnNumber);
  return `${randomRow}-${randomColumn}`;
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
};

const placeRover = (coordinate) => {
  const position = document.getElementById(coordinate);
  position.innerText = roverEmoji;
};
let createGrid = () => {
  // gridCreated.style.display = "block";
  gridCreated.replaceChildren();
  rowNumber = parseInt(document.getElementById("rowsInput").value);
  columnNumber = parseInt(document.getElementById("colsInput").value);

  for (let i = 1; i <= rowNumber; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= columnNumber; j++) {
      let column = document.createElement("div");
      column.className = "col";
      column.id = i + "-" + j;

      row.appendChild(column);
    }

    gridCreated.appendChild(row);
  }
  roverCoordinates = randomStart();
  placeRover(roverCoordinates);
};

const moveRover = (direction) => {
  const parts = roverCoordinates.split("-");
  if (direction === "ArrowRight") {
    if (Number(parts[1]) === columnNumber) {
      const newPosition = parts[0] + "-" + 1;
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    } else {
      const newPosition =
        String(Number(parts[0])) + "-" + String(Number(parts[1]) + 1);
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    }
  } else if (direction === "ArrowLeft") {
    if (Number(parts[1]) === 1) {
      const newPosition = parts[0] + "-" + columnNumber;
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    } else {
      const newPosition =
        String(Number(parts[0])) + "-" + String(Number(parts[1]) - 1);
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    }
  } else if (direction === "ArrowUp") {
    if (Number(parts[0]) === 1) {
      const newPosition = rowNumber + "-" + String(Number(parts[1]));
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    } else {
      const newPosition =
        String(Number(parts[0]) - 1) + "-" + String(Number(parts[1]));
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    }
  } else if (direction === "ArrowDown") {
    if (Number(parts[0]) === rowNumber) {
      const newPosition = 1 + "-" + parts[1];
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    } else {
      const newPosition = String(Number(parts[0]) + 1) + "-" + parts[1];
      document.getElementById(roverCoordinates).innerText = "";
      roverCoordinates = newPosition;
      placeRover(roverCoordinates);
    }
  }
};

document.addEventListener("keydown", (event) => moveRover(event.key));
