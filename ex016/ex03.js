function contar(){
    var inicio  = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('IMPOSSÍVEL CONTAR')
    } else {
        res.innerHTML = 'Contando... <br>'
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        if(pas <= 0){
            window.alert('PASSO INVÁLIDO.CONSIDERANDO PASSO 1')
            pas = 1
        }
        if(ini < fi){
            //CONTAGEM CRESCENTE    
        for (let c = ini; c <=fi ; c = c + pas){
            res.innerHTML += ` ${c} \u{1F449}	 ` // contrabarra e chaves são as modificações para javascript
        }
            res.innerHTML += `\u{1F3C1}` 
        } else {
            //CONTAGEM REGRESSIVA   
            for(let c = ini; c >=fi; c -= pas){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
            res.innerHTML += `\u{1F3C1}` 
        }
       
    }
}