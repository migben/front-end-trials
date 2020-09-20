const squares = Array.from(document.querySelectorAll('.grid div'))

// exercise:visually colour a game board in our browser.
// At the moment the board is empty. 
// Please colour the squares, similar to like you would 
// on a chess board using the for loop.

for(let i = 0; i < squares.length; i++){
    if( i % 2 === 0) {
        squares[i].classList.add("even")
    } else {
        squares[i].classList.add("odd")
    }
}