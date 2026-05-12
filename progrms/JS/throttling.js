function throttling(fn, limit){
    console.log('throttle', Date.now());
    let lastCall=0;
    return function(...args){
        const now = Date.now();

        if(now-lastCall >= limit){
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

function scrollHandler(){
    console.log("Scroll event", Date.now());
}

const throttledScroll = throttling(scrollHandler, 5000);

throttledScroll();
throttledScroll();
throttledScroll();
throttledScroll();
