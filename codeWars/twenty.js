function squareOrSquareRoot(array) {
  //jika array memiliki akar kuadrat maka tampilkan akar kuadratnya, jika tidak pangkatkan 2
  let result = []
 for (let i = 0; i < array.length; i++){
  if (array[i] % Math.sqrt(array[i]) !== 0){
      result.push(Math.pow(array[i], 2))
  } else {
      result.push(Math.sqrt(array[i]))
  }
 }
  return result;  
}
console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]))//[2,9,3,49,4,1]
console.log(squareOrSquareRoot([ 2, 9, 3, 49, 4, 1 ]))//[ 4, 3, 9, 7, 2, 1 ]
console.log(squareOrSquareRoot( [ 100, 101, 5, 5, 1, 1 ]))//[ 10, 10201, 25, 25, 1, 1 ];
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ]))//[ 1, 4, 9, 2, 25, 36 ];