let valores = [8,1,7,4,2,9]
valores.sort()
//começa com a variável em 0; enquanto "pos" for menor que a quantidade de itens em "valores"; aumentar 1 do valor de "pos"
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log("=".repeat(30))

//tem outra forma também!
//para cada posição dentro de "valores" (assim que se lê)

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log("=".repeat(30))

console.log(valores.indexOf(7)) // procura a chave do valor "7"
console.log(valores.indexOf(3)) // se não tiver, ele retorna "-1"