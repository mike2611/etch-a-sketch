  let board = document.getElementById("boardBorder");

  function createBoard() {
    for (let i = 0; i < 256; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.onmouseover = function(x){
        x.target.style.background = "tomato";
      }
      board.appendChild(square);
    }
  }

  function cleanBoard() { 
    let square = document.getElementsByClassName("square");
    for ( let i = 0; i < square.length; i++){
      square[i].style.background = setPrimary();
    }
  }

  function setSize() {
    board.innerHTML = '';
    let valueSize = document.getElementById("slider").value;
    let sizeLength = 480/valueSize;
    for (let i = 0; i < sizeLength * sizeLength; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = valueSize + "px";
      square.style.height = valueSize + "px";
      square.onmouseover = function(x){
        x.target.style.background = setSecondary();
      }
      board.appendChild(square);
    }
    cleanBoard();
  }

  function setPrimary() {
    let primaryColor = document.getElementById("primary-color").value;
    return primaryColor;
  }

  function setSecondary() {
    let secondaryColor = document.getElementById("secondary-color").value;
    return secondaryColor;
  }


  function setColor() {
    setSize();
    cleanBoard();
  }

  function reset() {
    cleanBoard();
  }

  function resize() {
    setSize();
  }

 function rainbow() {

  board.innerHTML = '';
  let valueSize = document.getElementById("slider").value;
  let sizeLength = 480/valueSize;
  for (let i = 0; i < sizeLength * sizeLength; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = valueSize + "px";
    square.style.height = valueSize + "px";
    square.onmouseover = function(x){
      x.target.style.background = 
      `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    }
    board.appendChild(square);
  }
  cleanBoard();

 }


  window.onload = createBoard();
