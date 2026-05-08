let arr = [29, 40, 50, 60];


const maxItem = Math.max.apply(null, arr);

console.log('maxItem by apply', maxItem);

//2 Dynamic function arguments
function tracking(event, page, user){
    console.log(event, page, user);
}


const analyticsdata = [
    "CLICK",
    "/dashboard",
    "Kamal"
]

tracking.apply(null, analyticsdata);

//3