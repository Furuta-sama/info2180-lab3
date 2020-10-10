window.onload = function() {
    console.log(":)");

    var count = 1;

    let squares = document.querySelectorAll("#board div");

    for(var i= 0; i < squares.length; i++){
        squares[i].classList.add("square");
    }

    squares.forEach(square => {
        square.addEventListener('click', clickListener, {once: true});
    });

    function clickListener (e){
        const square = e.target;
        if (count % 2 == 0){
            square.innerHTML = "O";
            square.classList.add("O")
        }
        else{
            square.innerHTML = "X";
            square.classList.add("X");
        }
        count++;
    }

}

