let num = document.getElementById('fnum'); // var num recebe numero inserido pelo usuário
let lista = document.getElementById('flista');// var lista recebe o select da lista 
let res = document.getElementById('res');// var res recebe div de mesmo id
let valores = [] // valores recebe vetor
function isNumero(n){ // função para validar a entrada do usuário de acordo com condições impostas pelo dev
    if (Number(n) >=1 && Number(n) <=100){ // se n(numeroinseridopelousuário) maior ou igual a 1 e menor que 100
        return true             // então o valor da função será verdadeiro, e, caso contrário, falso
    } else {
        return false
    }
}
function inLista(n,l){// função para validar se o numero inserido já se encontra na lista
    if (l.indexOf(Number(n)) != -1){ // se o índice do numeroinserido for diferente de -1(ou seja, = foi encontrado de fato)
        return true // então o valor da função será verdadeiro,e , caso contrário, falso
    }else {
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}