Welcome to Node.js v14.15.1.
Type ".help" for more information.
> var n1 = 1545.5
undefined
> n1
1545.5
> n1.toFixed(2)
'1545.50'
> n1.toFixed(2).replace('.',',') 
'1545,50'

//exercício desenvolvido no Node.js//
//declarei uma variável NUMBER com apenas UMA casa decimal e UM PONTO//
//transformei essa casa decimal em DUAS CASAS DECIMAIS//
//transformei UM PONTO em VÍRGULA//



> num.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})
'R$ 1.545,50'
> num.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
'US$ 1.545,50'

// Aqui, transformei o number em salário em moeda real brasileira
// como também em dólar americano//   