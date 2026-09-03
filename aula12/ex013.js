var agora = new Date()
var diaSem = agora.getDay()

// var diaSem = 7
/*
D - 0
S - 1
T - 2
Q - 3
Q - 4
S - 5
S - 6
*/ 

switch(diaSem){
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
      console.log('Quarta-feira')
      break  
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}