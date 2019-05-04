export const gcd = (a, b) => {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};


export const tricemus = (alph, key_word, msg) => {

    if(key_word.match(/[0-9]/g) !== null){
        console.log('есть цифры а кодовом слове')
        return 'ошибка: есть цифры в кодовом слове'
    }

    const kod_alph = [];
    const kod_word = [];
    const first = [...key_word].reduce((acc,el) =>{
        acc.some(_ => _ === el) ? acc : acc.push(el)
        return acc
    },[])
    const last = alph.slice(0, alph.length).split('')
        .filter(el => !first.some(_ => _ === el))
    
    const new_alpha = kod_alph.concat(first, last)

    for(let i = 0; i < msg.length; i++){ 

        for(let j = 0; j < new_alpha.length; j++){
           if(msg[i] === new_alpha[j]){
               kod_word.push(new_alpha[j+8 < new_alpha.length ? j+8 : j+8 - new_alpha.length])
           } 
        }
    }
       
    
    return kod_word.join('')
}



export const key_word_shifer = (alph, key_word, k) => { 
    const kod = [];

    if(key_word.match(/[0-9]/g) !== null){
        return false
    }

    const midle = [...key_word].reduce((acc,el) =>{
        acc.some(_ => _ === el) ? acc : acc.push(el)
        return acc
    },[])

    const last = alph.slice(0, alphabet.length - k).split('')
        .filter(el => !midle.some(_ => _ === el))
    const first = alph.slice(alphabet.length - k, alphabet.length).split('')
        .filter(el => !midle.some(_ => _ === el))

    return kod.concat(first, midle, last)
}

export const afin_sistem = (alph,a,b) => { 
    let kod = [];
    for(let i = 0; i < alph.length; i++){
        if(a*i+b < alph.length){
            kod[i] = alph[a*i+b]
        }else{
            kod[i] = alph[(a*i+b)%alph.length]
        }
    }
    return kod
}

export const alph_koder = (alph, shift) => {
    let kod = [];
    const alg = alph.split("").forEach((value, i, mass) => {
        if (i+shift<mass.length){
            kod[i] = mass[i+shift]
        }else{
            kod[i] = mass[i+shift-mass.length]
        }
    });
    return kod;
}

export const koder_fun = (text, alph, kod_alph) => {

    if(kod_alph === false) {
        return 'ошибка: есть цифры в кодовом слове'
    }
    let kod_text = "";
    for(let i=0; i<text.length; i++ )
    {
        for(let j=0; j<alph.length; j++ )
        {
            if(text[i]===" "){
                kod_text += " ";
                break;
            }
            if(alph[j]===text[i]){
                kod_text+=kod_alph[j];
            }
        }
    }
    return kod_text;
}

const alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
const shift = 2;
//console.log(koder_fun('абв', alphabet, alph_koder(alphabet, Number(shift))))

//console.log(koder_fun('абв абв', alphabet, afin_sistem(alphabet, 4, 2)))

//console.log(koder_fun('прилетаю завтра', alphabet, key_word_shifer(alphabet, 'работа', 6)))\

//console.log(tricemus(alphabet, 'работа', 'прилетаю завтра'))