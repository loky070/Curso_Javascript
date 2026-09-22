let senha_atual = "Super_Senha123"

let senha_digitada = prompt("Digite a senha:")

while(senha_digitada != senha_atual){
    alert('Senha errada!')
    senha_digitada = prompt("Digite novamente: ")
}

alert('Acertou a senha!')
