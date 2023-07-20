function carregar(){
var msg = window.document.getElementById('msg');
var image = window.document.getElementById('foto');
var data = new Date();
var hora = data.getHours()
//var hora = 20;
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12){
    //bomdia
    image.src = 'fotomanha.png';
    //document.body.style.background = ''
} else if (hora >= 12 && hora < 18){
//boa tarde
    image.src = 'fototarde.png';
    document.body.style.background = '#EC8936'
} else {
    //boa noite
    image.src = 'fotonoite.png';
    document.body.style.background = '#49646D'
}
}