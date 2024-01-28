// Random Color Function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Selecting buttons based on attribute
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

// Declaring the initial state of the buttons
start.disabled = false;
stop.disabled = true;

// Creating a variable to be used for setInterval
let timerId; 

// Adding event listeners for the start and stop buttons
start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;
  timerId = setInterval(() => {
  document.body.style.background = getRandomHexColor();
  }, 700);
});

stop.addEventListener('click', () => {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(timerId);
  document.body.style.background = "white";
});

// Creating a div to center the buttons easier
const container = document.createElement('div');
document.body.appendChild(container);
container.appendChild(start);
container.appendChild(stop);
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.gap = '10px';
container.style.padding = '17%';

// Styling the buttons
start.style.fontSize = "15px";
start.style.padding = "20px 35px";
stop.style.fontSize = "15px";
stop.style.padding = "20px 35px";