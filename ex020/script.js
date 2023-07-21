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
    if (isNumero(num.value) && !inLista(num.value, valores)){ // se o numero estiver dentro das regras estabelecidas e não
    valores.push(Number(num.value))  // estiver na lista (como denotado pelo sinal !, que significa NÃO)
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
        
            if (valores[pos] > maior){
                maior = valores[pos]
            } if (valores[pos]< menor){
                menor = valores[pos]
            }
            media = soma / tot
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}</p>`
    }
}