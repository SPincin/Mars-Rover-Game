let gridCreated = document.getElementById("gridContainer");
const roverEmoji = "\u{1F6F8}";
roverEmoji.className = "rover-emoji";
const rockEmoji = "\u{1F9F8}";
let rowNumber;
let columnNumber;

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

// const placeObstacles = (coordinate) => {
//   const position = document.getElementById(coordinate);
//   position.innerText = rockEmoji;
// };

// const createObstacles = (numObstacles) => {
//   removeObstacles();

//   for (let i = 0; i < numObstacles; i++) {
//     let obstacleCoordinate;

//     do {
//       const randomRow = getRandomNumber(rowNumber);
//       const randomColumn = getRandomNumber(columnNumber);
//       obstacleCoordinate = `${randomRow}-${randomColumn}`;
//     } while (
//       obstacleCoordinate === roverCoordinates ||
//       obstacleCoordinates.includes(obstacleCoordinate)
//     );

//     obstacleCoordinates.push(obstacleCoordinate);
//     placeObstacles(obstacleCoordinate);
//   }
// };

// const removeObstacles = () => {
//   for (const obstacleCoordinate of obstacleCoordinates) {
//     const obstaclePosition = document.getElementById(obstacleCoordinate);
//     obstaclePosition.innerText = "";
//   }
//   obstacleCoordinates.length = 0;
// };

let createGrid = () => {
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

let roverCoordinates = randomStart();
const moveRover = (direction) => {
  const parts = roverCoordinates.split("-");
  let newPosition;

  switch (direction) {
    case "ArrowRight":
      newPosition =
        parts[0] +
        "-" +
        (Number(parts[1]) === columnNumber ? 1 : Number(parts[1]) + 1);
      break;
    case "ArrowLeft":
      newPosition =
        parts[0] +
        "-" +
        (Number(parts[1]) === 1 ? columnNumber : Number(parts[1]) - 1);
      break;
    case "ArrowUp":
      newPosition =
        (Number(parts[0]) === 1 ? rowNumber : Number(parts[0]) - 1) +
        "-" +
        parts[1];
      break;
    case "ArrowDown":
      newPosition =
        (Number(parts[0]) === rowNumber ? 1 : Number(parts[0]) + 1) +
        "-" +
        parts[1];
      break;
    default:
      return;
  }

  document.getElementById(roverCoordinates).innerText = "";
  roverCoordinates = newPosition;
  placeRover(roverCoordinates);
};

document.addEventListener("keydown", (event) => moveRover(event.key));
