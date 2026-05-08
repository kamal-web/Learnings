let statement = "{)]})]";
let statement2 = "{}"
function parseString(inpt){
    let result = {};
    for(let i=0;i<inpt.length;i++){
        let character = inpt[i];
        if(result[charmap[character]]){
            result[charmap[character]] = (result[charmap[character]] || 0) - 1; 
        } else{
            result[character] = (result[character] || 0) + 1;
        }
    }
    
    // console.log('Result', Object.values(result), Math.max.apply(null,Object.values(result)), Math.max.apply(null,[0,0,0,0]));
    // console.log('console', Math.max(Object.values(result)) );
    
    if(Math.max(...Object.values(result)) === 0){
        return true;
    }
    
    return false;
}


const charmap = {
    "}":"{",
    ")":"(",
    "]":"["
};


console.log(`String "${statement}" is Balanced:`, parseString(statement));
console.log(`String "${statement2}" is Balanced:`, parseString(statement2));
 