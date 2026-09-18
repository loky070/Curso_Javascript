let maior = 0
for(let contador = 1; contador <= 5; contador++){
    let numero = Number(prompt('Digite um número: '))
    if (numero > maior){
        maior = numero
    }
}
window.alert(`O maior número digitado foi ${maior}`)
