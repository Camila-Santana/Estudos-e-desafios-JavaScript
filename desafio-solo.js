// tomei a liberdade de criar um desafio solo
// para relembrar minha trajetória até agora no JS
// pode parecer simplório, mas para mim
// representa um pouco do meu aprendizado
// o simples é necessário, afinal, 
// me sinto confortável para o JS básico

// Vamos?

//DESAFIO SOLO CONDICIONAL//

var nome = 'joao'
var idade = 20

var nome = 'maria'
var idade = 25

var nome = 'pedro'
var idade = 26

if (idade >= 18) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}

//DESAFIO SOLO TEMPLATE STRING, OBJETO e ARRAY//

var informacoes = [{
        nome: 'joao',
        idade: 20,
    },

    {
        nome: 'maria',
        idade: 25,
    },


]

console.log(`${informacoes[0].nome} tem ${informacoes[0].idade} anos, sendo maior de idade`)