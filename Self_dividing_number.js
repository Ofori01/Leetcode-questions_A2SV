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
        i % 10 === 0? i+=1 : _;
        let check =`${i}`.split();
        check.map(
            (number)=>{
                i % number ===0 ? res.pus(i): _;
            }
        )


    }
    return res
    
    
};
