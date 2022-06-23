// Crie um array que receba 5 itens e exiba no console.

let array_aleatorio=[0,1,2,3,4]
console.log(array_aleatorio)

// Utilize um método para adicionar um nome ao inicio do array.

let nome=["Pedro","Janela","Carro","MP3 Player"]
nome.unshift("JavaScript")
console.log(nome)

// Utilize um método para remover o último nome do array.
let array_ultimo=["Pedro","Janela","Carro","MP3 Player"]
array_ultimo.pop()
console.log(array_ultimo)

// Utilize um método para adicionar dois nomes ao fim do array.
let add_array=["Pedro","Janela","Carro","MP3 Player"]
add_array.push("Disney","Netflix")
console.log(add_array)

// Utilize um método para remover o primeiro nome do array.
let remove_primeiro=["Pedro","Janela","Carro","MP3 Player"]
remove_primeiro.shift()
console.log(remove_primeiro)

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7,5,6,3,8,9,2,1,4,10,11]
console.log(numbers.sort((a,b) => a-b))
