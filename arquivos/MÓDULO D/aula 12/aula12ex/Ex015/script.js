function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[erro] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'HOMEM'
            if (idade >=0 && idade < 10){
               // Criança
                img.setAttribute('src','bebe-M.jpg')
            }else if( idade < 21){
                //Jovem
                img.setAttribute('src','jovem.M.jpg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','adulto.M.jpg')
            }else{
                //Idoso
                img .setAttribute('src','idoso.M.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'MULHER'
            if (idade >=0 && idade < 10){
                //Criança
                img .setAttribute('src','bebe.F.jpg')
            }else if(idade >=10 && idade < 21){
                //Jovem
                img .setAttribute('src','jovem.F.jpg')
            }else if (idade < 50){
                //Adulto
                img .setAttribute('src','adulto.F.jpg')
            }else{
                //Idoso
                img .setAttribute('src','idosa.F.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }
}