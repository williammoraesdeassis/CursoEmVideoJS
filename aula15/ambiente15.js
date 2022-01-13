var num = [4, 6, 8, 10]

console.log(`${num.length}`)

for(let pos = 0; pos<num.length; pos++){
    console.log(`Na posição ${pos} o valor é ${num[pos]}.`)//Um jeito de imprimir uma array usando um loop for.
}

 
for(let pos in num){
    console.log(`Na posição ${pos} o valor é ${num[pos]}.`)//Imprimindo uma array usando um for in.
}

console.log(`${num[4]}`)