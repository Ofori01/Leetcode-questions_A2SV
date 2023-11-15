/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
/*
var selfDividingNumbers = function(left, right) {
    let res = Array.from({length: (right-left)/step + 1},
    (_,i)=> {
        num= left + i*step;
        num % 10 ===0 ? 
    }
    )
    
};
*/

var selfDividingNumbers = function(left, right) {
    let res = [];
    for (i=left; i < right+1; i++){
        if (i % 10 === 0){
            continue
        }
        
        let selfDividing = true;
        let n = i;
        while (n > 0) {
            let digit = n % 10;
            if (i % digit !== 0) {
                selfDividing = false;
                break;
            }
            n = Math.floor(n / 10);
        }
        if (selfDividing) {
            res.push(i);
        }
    }
    return res

    
    
};
