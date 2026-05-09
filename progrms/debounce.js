function debounce(fn, delay){
    console.log('inside debounce', delay);
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this, args);
        },delay)
    }
}

const debouncedSearch = debounce(search, 500);

function search(query){
    console.log('searched for', query);
}

debouncedSearch('a');
debouncedSearch('ab');
debouncedSearch('abc');