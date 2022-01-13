function carregar(){
    var img = window.document.querySelector('img#img')
    var msg = window.document.querySelector('div#msg')
    var now = new Date()
    var hora = now.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >=4 && hora <= 12){
        document.body.style.background =  '#ebc487'  
        img.src = 'fotomanha.png'
    } else if(hora > 12 && hora < 18){
        document.body.style.background = '#5a9ba6'
        img.src = 'fototarde.png'
    } else if(hora >=18 || hora < 4){
        document.body.style.background =  '#362f3d' 
        img.src = 'fotonoite.png'
    }

}