let arr = [1,2,3,1,4,2,4,6];


const additionOfArr = arr.reduce((acc, item)=>{
    return acc = acc+item; 
}, 0);

console.log('Addition of arr', additionOfArr);

const countOfItems = arr.reduce((acc, item)=>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},{})

console.log('Freq of arr', countOfItems);