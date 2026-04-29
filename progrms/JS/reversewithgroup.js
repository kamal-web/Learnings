const a = [1,2,3,4,5,6,7,8];
function reverseWithGroup(arr, limit){
    let reversedArray = [];
    
    
    for(let i=0;i<arr.length;i+=limit){
        let end= Math.min(i+limit-1, arr.length-1);
        for(let j=end;j>=i;j--){
            reversedArray.push(arr[j]);
        }
        console.log('end of while', reversedArray);
    }
    return reversedArray;
}


console.log('reversedArrWithGroup', reverseWithGroup(a, 3));
console.log('reversedArrWithGroup', reverseWithGroup(a, 4));
