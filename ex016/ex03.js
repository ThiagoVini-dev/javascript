function contar(){
    var inicio  = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('IMPOSSÍVEL CONTAR')
    } else {
        res.innerHTML = 'Contando...'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        for (let c = ini; c <=fi ; c = c + pas){
            res.innerHTML += ` ${c} `
        }
    }
}