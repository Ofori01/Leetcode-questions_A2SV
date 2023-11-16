/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
   return ( 2 % n === 0 ? n : 2*n )
    
};