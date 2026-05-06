Array.prototype.reducePolyfill = function(cb, initialValue){
    let acc = initialValue;
    let startindex = 0;

    if(acc === undefined){
        acc = this[0];
        startindex = 1;
    }

    for(let i=startindex;i<this.length;i++){
        if(i in this){
            acc = cb(acc, this[i], i, this);
        }
    }

    return acc;

}

let arr = [1,2,3,1,4,2,4,6];

const additionofArr = arr.reducePolyfill((acc, item)=>{
    acc += item;
    return acc;
}, 0);


console.log('AdditionOfArray', additionofArr);

const freqOfArr = arr.reducePolyfill((acc,item) =>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},{})


console.log('FrreqOfArray', freqOfArr);

let arr2 = [{price:100},{price:300}];

const addprice = arr2.reducePolyfill((acc, item)=>{
    acc['totalPrice'] = (acc['totalPrice'] || 0) + item.price;
    return acc;
},{})

console.log('totalprice', addprice);

