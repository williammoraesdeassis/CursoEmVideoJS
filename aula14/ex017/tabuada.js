function gerarTabuada(){
    var txtnum = window.document.querySelector('input#txtnum')
    var res = window.document.querySelector('select#res')
    res.innerHTML = ''
    if(txtnum.value.length == 0){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var num = Number(txtnum.value)
        
        for(var c = 1; c <=10; c++){
            res.innerHTML += `<option>${num} x ${c} = ${num*c} </option>`
        }
        
    }
}