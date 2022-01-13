var x = 3
if(x == 10){
    x++
    console.log(x)
} else {
    if(x == 8){
    x--
    console.log(x)
    } else {
        if(x == 6){
            x += 2
            console.log(x)
        } else{
            if(x == 4){
                x -= 2
                console.log(x)
            } else {
                if(x == 2){
                    x *=2
                    console.log(x)
                } else{
                    x /=2
                    console.log(x)
                }
            }
        }
    }
} 