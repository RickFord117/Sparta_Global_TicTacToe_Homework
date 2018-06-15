var xTurn = true;
var resetButton = document.getElementById("reset");
var square = document.getElementsByTagName("td");

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function(event) {
    if (xTurn == true) {
      console.log(this.id);
      this.innerHTML = 'X';
      xTurn = false;
      playerTurn.innerHTML = "It is O's turn";
      if (square[0].innerHTML == 'X' && square[1].innerHTML == 'X' && square[2].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      } else if (square[3].innerHTML == 'X' && square[4].innerHTML == 'X' && square[5].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      } else if (square[6].innerHTML == 'X' && square[7].innerHTML == 'X' && square[8].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      } else if (square[0].innerHTML == 'X' && square[3].innerHTML == 'X' && square[6].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      } else if (square[1].innerHTML == 'X' && square[4].innerHTML == 'X' && square[7].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      } else if (square[2].innerHTML == 'X' && square[5].innerHTML == 'X' && square[8].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      } else if (square[0].innerHTML == 'X' && square[4].innerHTML == 'X' && square[8].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      } else if (square[2].innerHTML == 'X' && square[4].innerHTML == 'X' && square[6].innerHTML == 'X') {
        playerTurn.innerHTML = "X WINS!!!";
      }
    } else {
      console.log(this.id);
      this.innerHTML = 'O';
      xTurn = true;
      playerTurn.innerHTML = "It is X's turn";
      if (square[0].innerHTML == 'O' && square[1].innerHTML == 'O' && square[2].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      } else if (square[3].innerHTML == 'O' && square[4].innerHTML == 'O' && square[5].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      } else if (square[6].innerHTML == 'O' && square[7].innerHTML == 'O' && square[8].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      } else if (square[0].innerHTML == 'O' && square[3].innerHTML == 'O' && square[6].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      } else if (square[1].innerHTML == 'O' && square[4].innerHTML == 'O' && square[7].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      } else if (square[2].innerHTML == 'O' && square[5].innerHTML == 'O' && square[8].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      } else if (square[0].innerHTML == 'O' && square[4].innerHTML == 'O' && square[8].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      } else if (square[2].innerHTML == 'O' && square[4].innerHTML == 'O' && square[6].innerHTML == 'O') {
        playerTurn.innerHTML = "O WINS!!!";
      }
    }
  });
}

resetButton.addEventListener("click", function(event) {
  for (var i = 0; i < square.length; i++) {
    square[i].innerHTML = '';
    xTurn = true;
    playerTurn.innerHTML = "It is X's turn";
  }
});
