/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

// TODO: Add support for more colors
const colors = ["red", "green", "blue", "orange", "yellow", "purple"];
const sizes = ["small", "medium", "large", "x-large"];
const maxShapes = 10;
const shapes = [
  {
    color: "red",
    size: "small",
  },
  {
    color: "yellow",
    size: "small",
  },
];
let totalShapes = 0;
// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(addShape, 1000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const squares = document.querySelector("#squares");
  totalShapes += 1;
  const squareElements = shapes.map((shape) => {
    const element = document.createElement("li");
    element.classList.add(shape.color, shape.size);
    return element;
  });
  squares.replaceChildren(...squareElements);

  // TODO: Render the circles
  const circles = document.querySelector("#circles");
  circles.replaceChildren();
  totalShapes += 1;
  console.log(totalShapes);  
  shapes.forEach((shape) => {
    const circle = document.createElement("li");
    circle.classList.add("circle", shape.color, shape.size);
    circles.append(circle);

  });
  document.getElementById("counter").textContent = totalShapes;
}

/**
 * Add a random shape to the `shapes` array
 */
function addShape() {
  const color = colors[Math.floor(Math.random() * colors.length)];

  // TODO: Randomize the size of the shape
  const size = sizes[Math.floor(Math.random() * sizes.length)];

  shapes.push({ color, size });
  console.log(addShapeIntervalId+'ID')

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  if(totalShapes >= maxShapes) {
    clearInterval(addShapeIntervalId);
    alert("The max number of shapeshave been reached" + totalShapes)
  }
}
