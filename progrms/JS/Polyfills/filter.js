Array.prototype.myFilter = function(cb){
    let result = [];

    for(let i=0;i<this.length;i++){
        if(i in this && cb(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

const arr = [1,2,3,4,5];

const result = arr.myFilter((item, idx, arr)=>{
    if( item >= 3){
        return item;
    }
})

console.log('Filter result', result);