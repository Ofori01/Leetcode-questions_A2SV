/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let metTarget = 0;
    for (let i of hours){
        if(i >= target) metTarget++;

    }
    return metTarget
};

//solution 2

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.filter((hour)=>hour>=target).length
   
};
