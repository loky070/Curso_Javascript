function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours();
    var saudacao = ''
    
    if (hora < 6){
        saudacao = 'BOA MADRUGADA!'
        img.src = 'fotos/madrugada.png'
        document.body.style.background = '#22203b'
    } else if(hora < 12){
        saudacao = 'BOM DIA!'
        img.src = 'fotos/manha.png'
        document.body.style.background = '#dad1c6'
    } else if (hora <= 18){
        saudacao = 'BOA TARDE!'
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#ffb648'
    } else {
        saudacao = 'BOA NOITE!'
        img.src = 'fotos/noite.png'
        document.body.style.background = '#221310'
    }

    msg.innerHTML = `<strong>${saudacao}</strong><br>Agora são ${hora} horas.`
}