const board = document.getElementById('boardBorder');

function createBoard() {
  for (let i = 0; i < 256; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.onmouseover = (x) => {
      x.target.style.background = 'tomato';
    };
    board.appendChild(square);
  }
}

function setPrimary() {
  const primaryColor = document.getElementById('primary-color').value;
  return primaryColor;
}

function setSecondary() {
  const secondaryColor = document.getElementById('secondary-color').value;
  return secondaryColor;
}

function cleanBoard() {
  const square = document.getElementsByClassName('square');
  for (let i = 0; i < square.length; i += 1) {
    square[i].style.background = setPrimary();
  }
}

function setSize() {
  board.innerHTML = '';
  const valueSize = document.getElementById('slider').value;
  const sizeLength = 480 / valueSize;
  for (let i = 0; i < sizeLength * sizeLength; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${valueSize}px`;
    square.style.height = `${valueSize}px`;
    square.onmouseover = (x) => {
      x.target.style.background = setSecondary();
    };
    board.appendChild(square);
  }
  cleanBoard();
}

function setColor() { // eslint-disable-line
  setSize();
  cleanBoard();
}

function reset() { // eslint-disable-line
  cleanBoard();
}

function resize() { // eslint-disable-line
  setSize();
}

function rainbow() { // eslint-disable-line
  board.innerHTML = '';
  const valueSize = document.getElementById('slider').value;
  const sizeLength = 480 / valueSize;
  for (let i = 0; i < sizeLength * sizeLength; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${valueSize}px`;
    square.style.height = `${valueSize}px`;
    square.onmouseover = (x) => {
      x.target.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    };
    board.appendChild(square);
  }
  cleanBoard();
}

window.onload = createBoard();
