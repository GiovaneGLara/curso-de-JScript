/*function soma(n1,  n2){
return n1 + n2
}*/
//console.log(soma(2, 5)) // nesse caso ele ele pegou o n1 e substituil por 2 e o n2 por 5; e se por acaso eu mandar que some só o 2?

//console.log(soma(2)) //vai ficar indefinido ;porque 2 mais indefinido é "NaN" isso é "not a number"!

// para resolver o problema é só fazer como está abaixo !

function soma(n1=0,  n2=0){

    return n1 + n2
}
console.log(soma(7)) // agora que tem o  0  ele somol 7 com 0!