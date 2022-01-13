let vetor = []
let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')

function éNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function emLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}


function adicionar(){
    res.innerHTML = ' '
    if(éNumero(num.value) && !emLista(num.value, vetor)){
        vetor.push(Number(num.value))
        lista.innerHTML += `<option>Valor ${num.value} adicionado.</option>`
        num.value = ''
    } else {
        window.alert('Valor inválido ou já existente.')
    }
}


function finalizar(){
    if(vetor.length == 0){
        window.alert('Adicione algum valor.')
    } else{
        res.innerHTML = ''
        let tam = vetor.length
        let max = vetor[0]
        let min = vetor[0]
        let soma = 0
        for(let i=0 ; i< (vetor.length); i++){
            soma += vetor[i]
            if(vetor[i]>max){
            max = vetor[i]
            }
            if(vetor[i]< min){
            min = vetor[i]
            }
         }

    let média = Number(soma / vetor.length).toFixed(2)

    res.innerHTML += `<p>Ao todo, temos ${tam} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${max}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${min}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${média}.</p>`
    res.innerHTML += `<p>Esse foi o resultado obtido</p>`
    
    }
}
