function Game() {
    tabuleiro = [[0, 0, 0], [0, 0, 0], [0, 0 ,0]]
}

function criaJogador(nome, marcador) {
    return {nome, marcador}
}

// **Tirar esse código do global**
const jogador1 = criaJogador('Felipe Rangel', 'X')
const jogador2 = criaJogador('Maria Eduarda', 'O')

function selecionaQuadrado(id, jogador){
    
}