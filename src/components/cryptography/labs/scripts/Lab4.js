const alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя' 
const alphabet1 = [...alphabet].reverse().join('')
const text = 'прилетаю десятого'
const key = 'работа'

export const mod = (a,b) => {
    if (a >= b){
        return a % b
    } else if (a < 0) {
        if(a % b === 0) {
            return 0
        } else {
            return (a % b) + b
        }
    } else {
        return a 
    }
}

export const index_arr = (text, alph) => { 

    let result = []
    for(let i = 0; i<[...text].length; i++ ){ 
        for(let j = 0; j<[...alph].length; j++ ){ 
            if([...alph][j] === [...text][i]){
                result.push(j)
            }
        }
    }
   return result
}

export const shifer_vizgenera = (key, text, alph) => {
    let index_text = index_arr(text, alph);
    let index_key = index_arr(key, alph);
    let encode_text = [];
    console.log(text)
    console.log(alph)
    if([...text].filter(el => (![' ',...alph].some(_ => _ === el)))[0]){
        return 'Несоответсвие алфавита и текста'.split('')
    }
    if([...key].filter(el => (![' ',...alph].some(_ => _ === el)))[0]){
        return 'Несоответсвие алфавита и ключа'.split('')
    }
    for(let i = 0; i < index_text.length; i++ ){
        encode_text.push([...alph][mod( (Number(index_text[i]) + Number(index_key[mod(i, index_key.length)]) ), alph.length )])
    }
    return encode_text
    
    
}


//console.log(shifer_vizgenera(key, text, alphabet))

//console.log(shifer_uitsona(alphabet, alphabet1, text))

//console.log(shifer_text(shifer_table(alphabet, alphabet1), text))