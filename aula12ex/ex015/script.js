function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
      //formulário_ano
    var fano = document.getElementById('txtano').value;
    var res = document.querySelector('div#res');
    
    //se o comprimento do valor for 0 ou se o valor for maior que o ano atual, então exibe a mensagem de erro
    if (fano.length == 0 || Number(fano) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano);
        var genero = '';
        //criar uma imagem dinamicamente
        var img = document.createElement('img');
        //setar um atributo 'id' para a imagem
        img.setAttribute('id', 'foto');


        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotos/bebe_m.png');
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/jovem_m.png');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/adulto_m.png');
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idoso_m.png');
            }

            
        } else if (fsex[1].checked){ //podia ser só o else aqui já q tem só duas opções
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotos/bebe_f.png');
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/jovem_f.png');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/adulto_f.png');
            } else {
                //idoso
                img.setAttribute('src', 'fotos/idoso_f.png');
            }
        }
        // res.style.textAlign = 'center' pra centralizar via js
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
        // img.style.marginTop = '20px';
    }
}