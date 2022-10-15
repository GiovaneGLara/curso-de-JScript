let num = [5 , 8 , 2 , 9 , 3]

num.push(1) //SE EU MUDAR O VETOR PARA BAIXO DO SORT  ELE VAI MANDAR O 1 PARA A ULTIMA POSIÇÃO COMO NO EXEMPLO ABAIXO

num.sort()

//num.push(1)

console.log(num)

//console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições`)

//console.log(num[0])   //ou posso fazer como no exemplo abaixo

console.log(`O primeiro valor  do vetor é ${num[0]}`)

/*
let pos = num.indexOf(8)
console.log(`O valor está na posição ${pos}`)
*/

let pos = num.indexOf( 9) 
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`)
}
