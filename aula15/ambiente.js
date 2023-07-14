/*Variaveis compostas:
uma variavel para armazenar mais de um valor
*/

let num = [5, 8, 2, 9, 3]
num.sort() //ordena os numeros dentro do vetor
num[3] = 6 //var num recebe o 6 na posicao 3
num.push(7) //var num receber o 7
console.log(num)
num.length //comprimento da variavel
console.log(`O vetor tem ${num.length} posicoes.`)
console.log(`O primeiro valor de vetor e ${num[0]}.`)
num.sort()
console.log(num[1])//escrever valor na posicao 1
console.log(' ')
//Para escrever os vetores de outra forma:
for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}

console.log(' ')
for(let pos = 0;pos < num.length;pos++) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

console.log(' ')
//for in: for simplificado, otimizado para vetores e objetos:
for(let pos in num) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

console.log(' ')
//Encontrar um valor especifico em um vetor
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor nao foi encontrado!')
} else {
    console.log(`O valor esta na posicao ${pos}`)
}




