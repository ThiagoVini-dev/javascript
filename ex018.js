//VETORES E ESTRUTURAS DE REPETIÇÃO
// no lugar de |c <=3| também poderia colocar c <= a.length para pegar o numero exato de casas que o vetor possui
// composição do método for in
// for (VARIAVEL INDICE IN NOME DO VETOR){     }
// nomedovetor.sort() organiza em ordem os elementos de um array e os retorna
var a = [7,4,8,3];
var b = [20,60,12,45,44]
for (var c = 0; c <=3 ; c = c +1){
console.log(` posição ${c} tem valor ${a[c]}`)
}
for (var c in b){
    //console.log(b[c])
    console.log(` posição ${c} tem valor ${b[c]}`)
}

// metodo para buscar posição de valor no vetor console.log(b.indexOf(45))
// o valor -1 é retornado quando o requerido não pode ser encontrado
//console.log(b.indexOf(47)) retorna -1