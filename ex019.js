function parImp(n){
    if (n%2==0){
        return 'PAR'
    } else {
        return'ÍMPAR'
    }
}
/*var res = parImp()*/
//console.log(res)
console.log(parImp(9))
//////////////////////////////////////////////////////////////
function soma(n1=0,n2=0){ // n1 & n2= 0 significa que,caso um dos dois seja indefinido, por padrão será preechido com zero
    return n1+n2
}
console.log(soma(4,7))
/////////////////////////////////////////////////////////
var v = function(x){ // variavel rebeceu função
    return x*2
}
console.log(v(5))