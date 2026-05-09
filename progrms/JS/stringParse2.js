//Implement parsing function which return error if it is not finding respective closing braces, as per the order

let statement = "{[()]}";
let statement2 = "{[(])}";

const mapBraces = {
    "{":"}",
    "[":"]",
    "(":")"
}

function parseString(str){
    let stack = [];
    console.log('---- Parsing string -----', str);
    for( let ch of str){
        if(mapBraces[ch]){
            stack.push(mapBraces[ch])
        } else{
            if(stack.pop() !== ch){
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(`Is "${statement}" is Blanced with proper open/closed braces`, parseString(statement));
console.log(`Is "${statement2}" is Blanced with proper open/closed braces`, parseString(statement2));

