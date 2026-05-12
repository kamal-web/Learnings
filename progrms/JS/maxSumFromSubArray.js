let arr = [-2,1,-3,4,-1,2,1,-5,4];
// let arr2 = [-2,1,-3,4,-1,2,1,-5,4];
function maxSumWithSubArray(nums){
    let maxSum = nums[0];
    let currentSum = nums[0];
    // let maxSubArray = [];
    let startIndex=0;
    let end=0;
    let tempStart=0;
    console.log('Inside', nums)
    for(let i=1;i<nums.length;i++){
        // currentSum = currentSum + nums[i] > currentSum ? nums[i] : 0;
        if( nums[i] > currentSum + nums[i]){
            currentSum = nums[i];
            tempStart = i;
        } else{
            currentSum = currentSum + nums[i];
        }
        // currentSum = Math.max(nums[i], currentSum+nums[i]);
        // maxSum = Math.max(maxSum, currentSum);
        if(currentSum > maxSum){
            maxSum = currentSum;
            startIndex = tempStart;
            end = i;
        }        
    }
    // return maxSum;
    return {
        maxSum: maxSum,
        subA: nums.slice(startIndex, end+1).toString()
    };
}


console.log('maxSum', maxSumWithSubArray(arr));


