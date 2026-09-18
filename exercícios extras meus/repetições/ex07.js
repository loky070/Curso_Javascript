let pares = 0
for (let contador = 1; contador <= 100; contador++){
    if (contador % 2 == 0){
        pares +=1
    }
}
console.log(`Entre 1 e 100 tem ${pares} números pares.`)