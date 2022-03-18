function paint(e) {
  e.target.style.background = 'black';
}

function createSquares(number) {
  for (let i= 0; i < number*number; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    container.style['grid-template-columns']=  `repeat(${number}, 1fr)`
  }
}

function clearScreen(e) {
  squares.forEach(square =>container.removeChild(square))
  let number = prompt("Enter number of squares per side", "16")
  if (+number >=100) {
    number = 100;
  }
  createSquares(number)
  squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseenter', paint));
}
const container = document.querySelector('.container');

createSquares(16);

let squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseenter', paint));

const button = document.querySelector('button');
button.addEventListener('click', clearScreen);


