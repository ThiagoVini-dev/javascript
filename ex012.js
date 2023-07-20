//var agora = //new Date()
var hora = 2//agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 && hora >=7) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde')
}else if (hora > 18 && hora < 24){
    console.log('Boa noite')
} else if (hora >=0 && hora < 7){
    console.log('Boa madrugada')
}