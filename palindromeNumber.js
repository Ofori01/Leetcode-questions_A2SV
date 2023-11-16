/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = o;
    let n = x;
    while (n>=1){
        rev = rev*10 + n%10
        n= Math.floor(n/10)
        
    }
    return rev === x
    
};