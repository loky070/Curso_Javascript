let numero = Number(prompt('Digite um número: '))
let divisores = 0

for (let contador = 2; contador < numero; contador++){
    if(numero % contador == 0 ){
        divisores++
    }
}

if(divisores > 0){
    alert("O número NÃO É PRIMO")
}else{
    alert("O número É PRIMO")
}