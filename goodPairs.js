var numIdenticalPairs = function(nums=[]) {
    let numOfPairs = 0;

    for (let i =0; i < nums.length -1;++i){
        let n = i;
        while(n < nums.length -1){
            if (nums[n] === nums[n+1]){
                numOfPairs +=1 
                n++;
            }
            n++;
                
        }
}
return numOfPairs
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums=[]) {
    let numOfPairs = 0;

    for (let i =0; i < nums.length -1;++i){
        let n = i;
        while(n < nums.length -1){
            if (nums[n] !== nums[n+1]){
                n++;
                continue
            }
            else {
                n++;
                numOfPairs +=1;
            };
        }
}
return numOfPairs
};

Optimize this code3
var numIdenticalPairs = function(nums=[]) {
    let count = 0
    let goodPairs = {};
    for (i of nums){

    }
};


