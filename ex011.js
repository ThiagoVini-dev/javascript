var idade = 67
if (idade < 16) {
    console.log('NÃO VOTA')
} else {
    if (idade >= 16 && idade <= 18 || idade >= 67){
    console.log ('VOTO OPCIONAL')
    } else {
        if(idade > 18 && idade < 67){
        console.log('VOTO OBRIGATÓRIO')
        }
    }

}