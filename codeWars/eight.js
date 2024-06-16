
 //kyu 6
 function createPhoneNumber(numbers){
  let result = ''
  let result2 = ''
  let result3 = ''
  for (let j = 0; j <= 2; j++){
      result += numbers[j]
  }
  for (let h = 3; h <= 5; h++){
      result2 += numbers[h]
  }
  for (let k = 6; k <= 9; k++){
      result3 += numbers[k]
  }
return `(${result}) ${result2}-${result3}`
//   return `(${result}) ${result2}-${result3}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
