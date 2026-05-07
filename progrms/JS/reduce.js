let arr = [1,2,3,1,4,2,4,6];

const additionOfArray = arr.reduce((acc, item)=>{
    acc += item;
    return acc;
},0)

console.log('AdditionOfArray', additionOfArray);

const freqOfArr = arr.reduce((acc, item)=>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},{})

console.log('freqOfArr', freqOfArr);