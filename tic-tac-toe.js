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

