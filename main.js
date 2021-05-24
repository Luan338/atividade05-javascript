// Crie um array que receba 5 itens e exiba no console.
// Utilize um método para adicionar um nome ao inicio do array.
// Utilize um método para remover o último nome do array.
// Utilize um método para adicionar dois nomes ao fim do array.
// Utilize um método para remover o primeiro nome do array.
// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]
let itens = [{
    nome: ["Luan"],
    idade: 21,
    sexo: "Masculino",
    altura: 1.72,
    éHumano: true
}
]
itens[0].nome.unshift("Lorena")
itens[0].nome.pop()
itens[0].nome.push("Tati","Julia")
itens[0].nome.shift()
console.log(itens)

const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()
console.log(numbers)
