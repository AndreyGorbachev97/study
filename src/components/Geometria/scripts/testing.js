const mod = (a,b) => {
    return a >= b ? a % b : a < 0 ? (a % b) + b : a 
}


const test_ferma = (a, n) => { 
    return n < a+1 ? 'error' :
    mod(Math.pow(a, n-1), n) === 1 ? 
    'число n вероятно простое' :
    /*mod(Math.pow(a, n-1), n)*/'число n составное'
}

const test_millera_rabina = (a, n) => { 
    let s = 0;
    let per = n-1;
    while(per !== 0){
        per = per % 2
        if (per !== 0) { 
            break
        }
        s++
        per = (n-1) / (2 * s);
    }

    console.log(s)
    let r = (n-1) / Math.pow(2,s);
    console.log(r)
    let y = mod(Math.pow(a, r), n) 
    console.log(y)
    if(y !== 1 && y !== n-1 ){ 
        let j = 1
        if(j <= s-1 && y !== n-1){ 
            y = mod(Math.pow(y,2), n)
            if(y === 1) {
                return '0 число n составное'
            }
        }
        j = j+1;
        if(y !== n-1) { 
            return '1 число n составное'
        }

    }
    return 'число n вероятно простое'
}

const test_solovea = (a, n) => { 
    let r = mod(Math.pow(a, (n-1)/2 ), n)
    console.log(r)
    if ( r !== 1 && r !== n - 1 ) {
        return '0 число n составное'
    }

    let s = a/n
    console.log(mod(s, n))
    if(r !== mod(s, n) ){
        return '1 число n составное'
    }else{
        return 'число n, вероятно, простое'
    }

}

//console.log(test_ferma(2,597))
//console.log(test_millera_rabina(2,392))
console.log(test_solovea(2, 381))