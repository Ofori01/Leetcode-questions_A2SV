/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    Array.form(n,
        (i) =>{
            return i%5 === 0 && i%5 === 0 ? "FizzBuzz":
            i%3 ===0 ? "Fizz":
            i%5 === 0 ? "Buzz": i;
        }
        )
    
};