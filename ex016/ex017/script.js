function Tabuada(){
    let num = document.getElementById('txtn'); // incorporação de entrada do numero em var num
    let tab = document.getElementById('seltab'); // seleção de campo de exibição da tabuada em uma var
    if (num.value.length == 0){
    window.alert('Por favor, digite um número') // caso entrada vazia mensagem de erro
    } else {
        let n = Number(num.value); // conversão em numero
        let c = 1 // inicialização
        tab.innerHTML = '' //limpeza de campo select
        while (c <=10){
        let item = document.createElement('option') // criar campo de visualização de resultado
        item.text = `${n} x ${c} = ${n*c}` // exibir calculo e resultado
        tab.appendChild(item) // exibir tabuada
        item.value = `tab ${c}` // determinando valores para saída de dados
        c = c +1 // incremento 
        }
    }
}