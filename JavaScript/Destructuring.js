const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numerosSemDestructing = [numerosImpares, numerosPares]

const numeros = [...numerosImpares, ...numerosPares]

const [num1, num2, ...outrosNumeros]= [1, 2, 3, 4, 5]

const [nome1 = 'Welison'] = []


const pessoa = {
nome: 'Welison',
idade: 22
}

const pessoaComTelefone = {...pessoa, telefone: 12341234}

console.log(pessoaComTelefone)