Array.prototype.reducePolyfil = function(cb, initialValue){
    let acc = initialValue;
    let startIndex = 0;

    if(acc === undefined){
        console.log('')
        acc = this[0];
        startIndex = 1;
    }

    for(let i=startIndex;i<this.length;i++){
        if(i in this){
            acc = cb(acc, this[i], i, this);
        }
    }
    return acc;
}


let arr = [1,2,3,1,4,2,4,6];

const additionOfArr = arr.reducePolyfil((acc, item)=>{
    acc += item;
    return acc;
},0)

console.log('AdditionOfArray', additionOfArr);

const freqOfArr = arr.reducePolyfil((acc, item)=>{
    acc[item] = (acc[item] || 0) + 1;

    return acc;
},{})

console.log('FreqOfArr', freqOfArr);
