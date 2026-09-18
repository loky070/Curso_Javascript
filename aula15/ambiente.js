let num = [5,3,6,4];
console.log(num)

console.log(`Nosso vetor é o ${num}.`);
num[4] = 8; //Adiciona um elemento na posição 4 do vetor
console.log(num)
num.push(7); //Adiciona um elemento no final do vetor
console.log(num)

console.log(num.length) //Mostra o tamanho do vetor.NÃO TEM PARÊNTESES
num.sort();//Coloca os elementos do vetor em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
for (let contador = 0; contador < num.length; contador ++){}
consol