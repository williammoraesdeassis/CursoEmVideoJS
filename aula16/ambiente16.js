function piramede(n){
    for(let c = 0; c < n; c++){

        for(let i = 0; i < n - c; i++){
            console.log("_")
        }
        for(let j = 0; j < (2*c) + 1; j++){
            console.log('#')
        }
        for(let k = 0; k < n - c; k++){
            console.log("_")
        }
        console.log('\n')
    }
}
 
piramede(1)
