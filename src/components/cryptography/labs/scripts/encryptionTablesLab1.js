
export const single_permutation = (str, kod_str) => {
    const height = str.length/kod_str.length;
    const table = [];
    let width_str = 0;

    for(let i=0; i<kod_str.length; i++){
        table.push([kod_str[i]])
        for(let j=0; j<height; j++){
            table[i].push(str[width_str])
            width_str++
        }
    }

    let new_kod_str = '';

    for(let i = 1; i<height+1; i++){
        for(let j = 0; j<kod_str.length; j++){
            new_kod_str += table[j][i]
        }
    }
    return new_kod_str
}

export const magic_square = (msg, square) => { 
    return msg.reduce((acc, el, i, mass) => {
        acc += mass[square[i]-1];
        return acc
    },'')
}