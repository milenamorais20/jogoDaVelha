//Após a página carregar
document.addEventListener('DOMContentLoaded', () =>{
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

//Quando o jogo acabar
function handleClick(event){

    let square = event.target;//target é o elemento que sofreu o event/ação
    let position = square.id;


    if(handleMove(position)) {

        setTimeout(()=>{
            if (velha){
                alert('O jogo deu velha!')
            }
            else if(playerTime == 0){
                alert('Vitória para o jogador(a) ' + [jogador1.value])
            }
            else{
                alert('Vitória para o jogador(a) ' + [jogador2.value])
            }
        }, 10)

    };
    updateSquares(position);

}

//Para inserir o simbolo dentro do tabuleiro
function updateSquares(){
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if( symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

