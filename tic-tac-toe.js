window.onload = function() {
    var count = 1;
    const wincon = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"]
      ] 

    let status = document.getElementById("status");
    let buttons = document.getElementsByClassName("btn");
    let squares = document.querySelectorAll("#board div");

    buttons.item(0).addEventListener("click", function(e){
        squares.forEach(square => {
            square.classList.remove("O");
            square.classList.remove("X");
            square.innerHTML = "";
            square.removeEventListener("click", clickListener);
            square.addEventListener("click", clickListener, {once: true});
        })
        count = 1;
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."
        status.classList.remove("you-won");
    })

    for(var i= 0; i < squares.length; i++){
        squares[i].classList.add("square");
    }

    squares.forEach(square => {
        square.addEventListener('click', clickListener, {once: true});
        });

    squares.forEach(function(elem, index, list) {
        elem.addEventListener('mouseover', function(e) {
            e.target.classList.add('hover');
        });
            
        elem.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
        });
    });

    function clickListener (e){
        const square = e.target;
        var currentPlayer;
        if (count % 2 == 0){
            currentPlayer = "O";
            square.innerHTML = "O";
            square.classList.add("O");
            status.innerHTML = "It's X's turn! ";
        }
        else{
            currentPlayer = "X";
            square.innerHTML = "X";
            square.classList.add("X");
            status.innerHTML = "It's O's turn!";
        }
        if (checkWin(currentPlayer)){
            status.innerHTML = "Congratulations! " + currentPlayer + " is the Winner!";
            status.classList.add("you-won");
            endGame();

        }
        else if (checkDraw()){
            status.innerHTML = "Draw! Please press New Game to restart";
            endGame();
        }
        count++;
    }

    function checkWin(currentPlayer) {
        return wincon.some(combination => {
          return combination.every(index => {
            return squares[index].classList.contains(currentPlayer)
          })
        })
    }
    
    function checkDraw(){
        return [...squares].every(square => {
            return square.classList.contains("X") || square.classList.contains("O");
        })
    }

    function endGame(){
        squares.forEach(square =>{
            square.removeEventListener("click", clickListener);
        })
    }
}

