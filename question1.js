/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
   return Array.from({length: n},
        (n,i) =>{
            i+=1;
            return (i%5 === 0 && i%3 === 0 ? "FizzBuzz":
            i%3 ===0 ? "Fizz":
            i%5 === 0 ? "Buzz": `${i}`)
        }
        )
    
};
/*
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res =[];
    for (i=1; i < n+1; ++i){
        (i % 5 ===0 && i %3 ===0 ? res.push('FizzBuzz'): i % 3===0 ? res.push('Fizz'): i % 5===0 ? res.push('Buzz'): res.push(`${i}`));


    }
   
        return res
        
    
};