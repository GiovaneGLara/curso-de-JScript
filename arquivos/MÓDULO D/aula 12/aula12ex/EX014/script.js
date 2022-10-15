function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora= data.getHours()
//var hora = 18
msg.innerHTML = `A gora são ${hora} horas`
if(hora >= 0 && hora < 12 ){
   // BOM DIA!
   document.body.style.background = 'pink '
    img.src = 'Bom Dia!.jpg'
}else if (hora >= 12 && hora < 18){
    //BOA TARDE!
    document.body.style.background = 'light blue'
    img.src = 'Boa Tarde!.jpg'
}else{
    //BOA NOITE!
    document.body.style.background= 'black'
    img.src = 'Boa Noite!.jpg'
}
}