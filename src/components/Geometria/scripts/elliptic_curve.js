const mod = (a,b) => {
    return a >= b ? a % b : a < 0 ? (a % b) + b : a 
}

const discriminant = (a,b, m) => {
    return mod(4 * Math.pow(a,3) + 27 * Math.pow(b,2), m)
}

const arrayOfSquaresModulo = (m) => {
    let array = [];
    for(let i = 0; i < m; i++){
        array.push(mod(Math.pow(i,2), m))
    }
    return array
}

const arrayPoints = (arrayOfSquares ) => {
    const m = arrayOfSquares.length;
    let y_square = []
    for(let i = 0; i < m; i++){
        y_square.push(mod((Math.pow(i,3) + 2 * i + 3), m))
    }
    const array_y_square = y_square.filter(_ => arrayOfSquares.some( a => a === _))
    const array_points = [];
    for(let i = 0; i < y_square.length; i++){
        for(let j = 0; j < m; j++){
            y_square[i] === arrayOfSquares[j] ?
             array_points.push({y_square: y_square[i], index: i, point: j}) : array_points
        }
    }

    return y_square.map((el, i) => {
        return {y_2: el, points: array_points.filter(_ => _.index === i)}
    })
    
}


//console.log(mod(6,5))
//console.log(discriminant(8,4,23))
//console.log(arrayOfSquaresModulo(13))

console.log(arrayPoints(arrayOfSquaresModulo(13))[12].points)