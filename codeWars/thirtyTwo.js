/** Wilson primes satisfy the following condition. Let P
P represent a prime number.

Then,

(P−1)! + 1 / (P∗ P)
should give a whole number, where 
P! is the factorial of P
Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.

*/

function amIWilson(p) {
  // check if prime is Wilson
  return p === 5 || p === 13 || p === 563;
}
//kenapa 5, 13, dan 563 ? karena bilangan prima wilson yang di ketahui hanya 5, 13 , 563 dari wikipedia dan hanya bilangan ini
//yg memenuhi kondisi rumus di atas
console.log(amIWilson(5)) //, true)
console.log(amIWilson(9)) //, false)
console.log(amIWilson(6)) //, false)
