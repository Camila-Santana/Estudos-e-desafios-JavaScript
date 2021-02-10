var candidatos = [{
        nome: 'Saymon',
        idade: 27,
    },

    {
        nome: 'Juliana',
        idade: 30,
    },

    {
        nome: 'Pedro',
        idade: 20,
    }
]

//Acessando array//
console.log(candidatos[0])

//deixando uma mensagem para o candidato na posição zero//

console.log(`Candidato ${candidatos[0].nome} seja bem vindo(a)`) // candidato na posição zero
    //seja bem vindo(a)
    // A lógica é : template string fazendo referencia a variável criada, a posição em que se deseja
    // acessar, ponto e o que se deseja como resultado na mensagem//