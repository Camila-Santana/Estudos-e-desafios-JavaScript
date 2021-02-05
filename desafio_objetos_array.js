//DESAFIO: CONSTRUÇÃO e IMPRESSÃO de OBJETOS//

// Crie um programa que :
//armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.
// Os dados a serem armazenados são:
//Nome: Rocketseat
//Cor: Roxo
//Foco: Programação
//Endereço:
//Rua: Rua Guilherme Gembala Número: 260

// objeto chamado empresa //
var empresa = {
    nome: 'Rocketseat',
    cor: 'roxo',
    foco: 'programação',
    endereco: 'Rua Guilherme Gembala, 260'
}

//Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260//
//Obs. Para imprimir em tela utilize o formato de template strings//

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco}`) // aqui usei o ponto. para acessar o objeto criado 
    // e suas propriedades, utilizando o template string//