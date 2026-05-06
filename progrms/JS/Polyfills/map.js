Array.prototype.myMap = function(cb){
    let result = [];

    for(let i=0;i<this.length;i++){
        if(i in this){
            result.push(cb(this[i], i, this));
        }
    }
    return result;
}

let Arr = [1,2,3,4];

const result = Arr.myMap((item, idx, arr)=>{
      return item * 2;
});

console.log('result', result);