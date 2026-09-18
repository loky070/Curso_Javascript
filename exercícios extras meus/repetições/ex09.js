let numero = Number(prompt('Digite um número: '))

let resultado = 1

for (let contador = numero; contador >= 1; contador--) {
    resultado = resultado * contador
}

window.alert(`O fatorial de ${numero} é ${resultado}`)