export const shifer_table = (alph, key) => {
    if([...key].filter(el => (![' ',...alph].some(_ => _ === el)))[0]){
        return 'Несоответсвие алфавита и текста'
    }
    
    const first = [...key].reduce((acc,el) => { 
        if(!acc.some(_ => _ === el)) { 
            acc.push(el) 
        } 
        return acc 
    },[]) 
    
    const last = [...alph].reduce((acc,el) => { 
        if(!first.some(_ => _ === el)) { 
            acc.push(el) 
        } 
        return acc 
    },[]) 
    
    return first.concat(last) 
    
} 
    
export const shifer_text = (table, text) => { 

    if([...text].filter(el => (![' ',...table].some(_ => _ === el)))[0]){
        return 'Несоответсвие алфавита и текста'
    }

    const biogram = [...text].reduce((acc, el) => { 
        table.forEach((item, index) => { 
        if(item === el){ 
            acc.push(index) 
        }
    }) 
    return acc 
    }, []) 

    let index_shifer_text = [] 
    for(let i = 0; i < biogram.length; i += 2){ 
        index_shifer_text.push({p1: biogram[i], p2: biogram[i+1]}) 
    } 

    let shifer_text = [] 

    for(let i = 0; i < index_shifer_text.length; i++){ 
        if(Math.floor(index_shifer_text[i].p1 / 8) !== Math.floor(index_shifer_text[i].p2 / 8)){

            if(index_shifer_text[i].p1 > index_shifer_text[i].p2){
                shifer_text.push([...table][index_shifer_text[i].p2 + 8 * (Math.floor(index_shifer_text[i].p1/8))])
                shifer_text.push([...table][index_shifer_text[i].p1 - 8 * (Math.floor(index_shifer_text[i].p1/8))])
            }else {
                shifer_text.push([...table][index_shifer_text[i].p2 - 8 * (Math.floor(index_shifer_text[i].p2/8))])
                shifer_text.push([...table][index_shifer_text[i].p1 + 8 * (Math.floor(index_shifer_text[i].p2/8))])
            }   

        } 
        
        else if ((index_shifer_text[i].p1 - index_shifer_text[i].p2) % 8 === 0){
            shifer_text.push([...table][index_shifer_text[i].p1 + 8])
            shifer_text.push([...table][index_shifer_text[i].p2 + 8])       
        }

        else if (Math.abs(index_shifer_text[i].p1 - index_shifer_text[i].p2) < 8){
            shifer_text.push([...table][index_shifer_text[i].p1 + 1])
            shifer_text.push([...table][index_shifer_text[i].p2 + 1])   
        }
    } 

    return shifer_text.join('')
} 


const alphabet = 'абвгдежзийклмнопрстуфхцчшщъыьэюя' 

const text = 'в симметричной криптосистеме секретный ключ передается по защищенному каналу' 

const key = 'справочник' 

//console.log(shifer_table(alphabet, key)) 

console.log(shifer_text(shifer_table(alphabet, key), text))