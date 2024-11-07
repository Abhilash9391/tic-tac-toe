
let boxes = document.querySelector(".boxes")
let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn")
let playerO = true
let gameOver = false


// Event listener for box clicks
box.forEach(box => {
  box.addEventListener("click", (e) => {
    if (!gameOver && box.innerHTML === "") {  // Only change if the box is empty
      if (playerO) {
        box.innerHTML = "O";
        playerO = false;
        newgame();
      } else {
        box.innerHTML = "X";
        playerO = true;
        newgame();
      }
    }
  });
});

// Function to reset the board
function resetBoard() {
  box.forEach(box => {
    box.innerHTML = "";  // Clear the inner HTML of each box
  });
  playerO = true;  // Reset player to start with player O
  gameOver = false
}

// Add event listener to the reset button
resetBtn.addEventListener("click", resetBoard);

function newgame() {
  let winorder = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  
  winorder.forEach(arr =>{
    let p0 = box[arr[0]].innerHTML
    let p1 = box[arr[1]].innerHTML
    let p2 = box[arr[2]].innerHTML

    // Check if all three values are the same and not empty
    if (p0 !== "" && p0 === p1 && p1 === p2) {
      let msg = `Congratulations! ${p0} won`;
      alert(msg);
      gameOver = true

    }
  });
}













