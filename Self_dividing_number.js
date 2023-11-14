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
        i % 10 === 0? i+=1 : i;
        let check =`${i}`.split('');
        let selfDividing = false;
        check.map(
            (number)=> {
                if (selfDividing && i % number===0){
                    selfDividing = true;
                    }
                    else selfDividing= false;
            }
            );
        
        selfDividing ? res.push(i): i;


    }
    return res
    
    
};
