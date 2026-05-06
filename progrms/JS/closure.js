function outer(){
    let count=0;

    return function inner(){
        count++;
        console.log('Inner', count);
    }

    // return inner;
}

const clouserFn = outer();

clouserFn();
clouserFn();
clouserFn();
