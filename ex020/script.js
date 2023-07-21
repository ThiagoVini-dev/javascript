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
    let item = document.createElement('option')// criar opção visivel dentro do select no html 
    item.text = `Valor ${num.value} adicionado`//inserir essa linha no texto da var item
    lista.appendChild(item) // exibir item dentro da lista
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // apos as condições, para limpar os dados previamente inseridos pelo usuário
    num.focus() // metodo de limpeza
}
function finalizar(){
    if (valores.length == 0){//caso tamanho do vetor=0 alerta para inserir dados
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length // var recebe tamanho do vetor
        let maior = valores[0] // ao iniciar, o primeiro valor é o maior valor
        let menor = valores[0]// ao iniciar, o último valor é o menor valor
        let soma = 0 // var soma recebe 0 para iniciar dentro do laço FOR
        let media =0//var media recebe 0 para iniciar e,depois que soma passa pelo laço, recebe seu valor para calcular media
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
    } /*grupo de comandos para exibir os resultados abaixo do campo select*/
}