let numero = Number(prompt('Digite um número: '))

for(let contador = 0; contador <= 10; contador++){
    let calculo = numero * contador
    console.log(`${numero} x ${contador} = ${calculo}`)
}