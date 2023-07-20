//VETORES E ESTRUTURAS DE REPETIÇÃO
// no lugar de |c <=3| também poderia colocar c <= a.length para pegar o numero exato de casas que o vetor possui
// composição do método for in
// for (VARIAVEL INDICE IN NOME DO VETOR){     }
var a = [7,4,8,3];
var b = [20,60,12,45,44]
for (var c = 0; c <=3 ; c = c +1){
console.log(` posição ${c} tem valor ${a[c]}`)
}
for (var c in b){
    //console.log(b[c])
    console.log(` posição ${c} tem valor ${b[c]}`)
}
