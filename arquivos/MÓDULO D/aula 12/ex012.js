var agora = new Date()
var hora = agora.getHours()
var data = new Date()
var estante = data.getDate()
console.log(`data: ${data} `)
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 ){
    console.log('Bom Dia')
}else if (hora <= 18){
    console.log('Boa Tarde')
}else {
    console.log('Boa Noite')
}