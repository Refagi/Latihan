/**
 * 
 * @param {*} n 
 * @param {*} height 
 * @param {*} radius 
 */

function lengthOfVine(n,height,radius){
  //coding here...
  let keliling = 2 * Math.PI * radius;
  let jmlhLilitan = n * keliling;
  let pythagoras = Math.sqrt((jmlhLilitan)**2 + (height)**2);
  let result = parseFloat(pythagoras.toFixed(2))
  return result;
}

console.log(lengthOfVine(5,20,0.5)); //25.43
console.log(lengthOfVine(2,10,1)); //16.06
console.log(lengthOfVine(3,4,5)); //94.33

