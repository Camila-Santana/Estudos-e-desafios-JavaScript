// Nesse DESAFIO, a cada estudo, um nível a mais
// a dificuldade tende a aumentar
// e nesse projeto, vou desenvolver baseado em tudo o que estudei
// recapitulando: variaveis, strings, number, condição, objeto, operadores...
// bora?


// OBJETOS e VARIÁVEIS e CONSOLE.LOG //
var jogador01 = {
    nome: 'Mateus',
    pontuacao: 10
}

var jogador02 = {
    nome: 'Matias',
    pontuacao: 9
}

var jogador03 = {
    nome: 'Mauricio',
    pontuacao: 8
}

var media = (jogador01.pontuacao + jogador02.pontuacao + jogador03.pontuacao) / 3

console.log(media)

// CONDIÇÃO e OPERADORES e CONSOLE.LOG //
if (media <= 10 && media >= 7) {
    console.log('Jogador apto para continuar')
} else {
    console.log('Jogador precisa de treinamento para continuar')
}