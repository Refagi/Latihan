 
 function oddOrEven(array) {
  let result = 0
  for (let i = 0; i < array.length; i++){
      result += array[i]
  }
  let cek = Math.abs(result)
  if (cek % 2 === 0){
      return 'even'
  } else {
      return 'odd'
  }
  //enter code here
}
console.log(oddOrEven([0]))//even
console.log(oddOrEven([1]))//odd
console.log(oddOrEven([]))//even
console.log(oddOrEven([0, 1, 5]))//even
console.log(oddOrEven([0, 1, 3]))//even
console.log(oddOrEven([1023, 1, 2]))//even
console.log(oddOrEven([0, -1, -5]))//even
console.log(oddOrEven([0, -1, -3]))//even
console.log(oddOrEven([-1023, 1, -2]))//even
console.log(oddOrEven([0, 1, 2]))//odd
console.log(oddOrEven([0, 1, 4]))//odd
console.log(oddOrEven([1023, 1, 3]))//odd
console.log(oddOrEven([0, -1, 2]))//odd
console.log(oddOrEven([0, 1, -4]))//odd
console.log(oddOrEven([-1023, -1, 3]))//odd