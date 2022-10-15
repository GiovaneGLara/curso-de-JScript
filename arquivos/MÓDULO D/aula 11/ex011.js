var idade = 68
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('nao vota')
}else if ( idade < 18 || idade > 65){
     console.log('voto opcional, no Brasil!')
}else {
    console.log('voto obrigatorio, no Brasil!')
}