
function contar(){
    var txtini = window.document.querySelector('input#txtini')
    var txtfim = window.document.querySelector('input#txtfim')
    var txtpass = window.document.querySelector('input#txtpass')
    var res = window.document.querySelector('p#res')

    if(txtini.value.length == 0 || txtfim.value.length == 0 || txtpass.value.length == 0){
        res.innerHTML = 'Impossível contar.'
    } else {
        var inicio = Number(txtini.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpass.value)
        var res = window.document.querySelector('p#res')
        if(fim <= inicio || passo == 0){
            window.alert('verifique os valores e tente novamente')
        } else{
            res.innerHTML = 'Contando:'
            for(inicio; inicio <= fim; inicio++){
                res.innerHTML += `${inicio} 👉`
                inicio = inicio + passo - 1

        }
        res.innerHTML += '✔️'
        }
    }
    /*res.innerHTML = inicio
    res.innerHTML += fim
    res.innerHTML += passo
    */
}
//res.innerHTML = ''