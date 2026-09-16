function tabuada() {
    var num = document.getElementById('num').value;
    var res = document.getElementById('res');
    res.innerHTML = '';

    if (!num) {
        alert('Por favor, insira um número.');
        res.innerHTML = 'Por favor, insira um número.';
        return;
    }

    for (var i = 1; i <= 10; i++) {
        var resultado = num * i;
        res.innerHTML += `${num} x ${i} = ${resultado}<br>`;
    }
}