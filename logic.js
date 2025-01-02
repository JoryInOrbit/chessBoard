const chessBoard = document.getElementById('chessBoard');
const colorButtons = document.querySelectorAll('.colorButton');


white = false;
for(let i = 0; i < 8; i++){
    white = !white;
    const row = document.createElement('div');
    row.id='col'+(i+1);
    for(let j = 0; j < 8; j++){
        const square = document.createElement('div')
        square.id='square'+(j+1+8*i)
        square.classList.add('square');
        if(white){
            square.classList.add('whiteSquare');
        }
        else{
            square.classList.add('coloredSquare');
        }
        white = !white;
        row.appendChild(square)
    }
    chessBoard.appendChild(row)
}

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        colorButtons.forEach(otherButton => {
            otherButton.classList.remove('activeColor');
        })
        button.classList.add('activeColor');
        const color = button.getAttribute('data-color'); 

        const squares = document.querySelectorAll('.coloredSquare');

        squares.forEach(square => {
            square.style.backgroundColor = color;
        })
    })
});