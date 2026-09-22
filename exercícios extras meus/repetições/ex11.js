let somas = 0
let numero = Number(prompt('Digite um número:'))
let quantidade = 0
while(numero != 0){
    somas += numero
    numero = Number(prompt('Digite outro número:'))
    quantidade++
}
console.log(`foram digitados ${quantidade} números e a soma deles vale ${somas}`)