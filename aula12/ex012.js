var agora = new Date()
var hora = agora.getHours()

if(hora < 12){
    console.log(`São ${hora}hrs, Bom DIA!!!`)
} else if(hora <= 18){
    console.log(`São ${hora}hrs, Boa TARDEEE!!!`)
} else{
    console.log(`São ${hora}hrs, BOA NOITE!`)
}
