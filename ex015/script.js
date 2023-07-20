function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var img = document.createElement('img');
        img.setAttribute('id','foto')
        var genero = '';
        if (fsex[0].checked ){
            genero = 'Homem'
            if(idade >=0 && idade <10 && genero=='Homem'){
                //criança
                img.setAttribute('src','menino1.png')
            } else if(idade>=10 && idade <21 && genero=='Homem') {
                //jovem
                img.setAttribute('src','homemjovem1.png')
            } else if(idade>=21 && idade <60 && genero=='Homem') {
                //adulto
                img.setAttribute('src','homemadulto1.png')
            } else if (idade >60 && genero=='Homem') {
                //idoso
                img.setAttribute('src','homemidoso1.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
        } if (idade >0 && idade <10 && genero=='Mulher'){
            //criança
            img.setAttribute('src','menina1.png')
        } else if (idade >=10 && idade <21 && genero=='Mulher'){
            //jovem
            img.setAttribute('src','mulherjovem1.png')
        } else if (idade >=21 && idade <60 && genero=='Mulher'){
            //adulta
            img.setAttribute('src','mulheradulta1.png')
        } else if (idade >=60 && genero=='Mulher'){
            //idosa
            img.setAttribute('src','mulheridosa1.png')
        }
        res.innerHTML += ` <br> Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
    
}