function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value.length > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var txsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - fano.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(txsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <=12){
                //criança
                img.setAttribute('src', 'criancamas.png')
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'jovemmas.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'adultomas.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosomas.png')
            }
        } else if(txsex[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <=12){
                //criança
                img.setAttribute('src', 'criancafem.png')
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'jovemfem.png')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'adultofem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosofem.png')
            }
        }
        res.style.textAlign = 'center'

        res.innerHTML = `<p>Detectamos um ${genero} com ${idade}.</p>`
        res.appendChild(img)
    }
}