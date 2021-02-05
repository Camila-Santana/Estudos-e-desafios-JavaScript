// DESAFIO: ARRAYS e OBJETOS //
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

//As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

//{ nome: 'C++', especialidade: 'Desktop' }
//{ nome: 'Python', especialidade: 'Data Science' }
//{ nome: 'JavaScript', especialidade: 'Web/Mobile' }

var dados = [{
        nome: 'Carlos',
        idade: 32,
    },

    tecnologia01 = {
        nome: 'C++',
        especialidade: 'Desktop',
    },

    tecnologia02 = {
        nome: 'Phyton',
        especialidade: 'Data Science',
    },

    tecnologia03 = {
        nome: 'JavaScript',
        especialidade: 'Web/Mobile',
    }

]

//imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`O usuário ${dados[0].nome} tem ${dados[0].idade} anos e usa a tecnologia ${dados[1].nome} com especialidade em ${dados[1].especialidade}`)