function contar() {
    var inicioInput = document.getElementById('txti').value;
    var fimInput = document.getElementById('txtf').value;
    var passoInput = document.getElementById('txtp').value;
    var resultado = document.getElementById('resultado');

    // console.log(inicioInput, fimInput, passoInput);
    // console.log(typeof inicioInput, typeof fimInput, typeof passoInput);

    resultado.innerHTML = '';

    //inicioInput.length === 0 || fimInput.length === 0 também funciona, mas é mais verboso
    if (!inicioInput || !fimInput) {
        resultado.innerHTML = 'Impossível contar!';
        alert('[ERRO] Faltam dados!');

    }else {
        var inicio = Number(inicioInput);
        var fim = Number(fimInput);
        var passo = Number(passoInput);

        if (passo <= 0){
            alert('Passo inválido! Considerando PASSO 1');
            passo = 1;

        }

        if (inicio < fim) {
            // Contagem crescente
            for (var i = inicio; i <= fim; i += passo) {
                resultado.innerHTML += i + ' &#x1F449; ';
            }
        } else {
            // Contagem decrescente
            for (var i = inicio; i >= fim; i -= passo) {
                resultado.innerHTML += i + ' &#x1F449; ';
            }
        }
        resultado.innerHTML += ' &#x1F3C1;';
    }
}