function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = '' // Limpa o select antes de adicionar novos valores
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Atribui um valor único para cada opção
            tab.appendChild(item)
            c++
        }
    }
}