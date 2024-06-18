
function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`
}

console.log(greet("Ryan")) //"Hello, Ryan how are you doing today?"
console.log(greet("Shingles"))// "Hello, Shingles how are you doing today?"


let arr = [2, 4, 6, 8, 10];
let result = arr.flatMap((x) => x + 1)
console.log(result)


var twoSum = function(nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++){
      for (let j = i + 1; j < nums.length; j++){
          if (nums[i] + nums[j] === target){
              result.push(i, j)
          }
      }
  }
  return result
};
console.log(twoSum ([2,7,11,15], 9))//[ 0, 1 ]
console.log(twoSum ([3,2,4], 6))//[ 1, 2 ]
console.log(twoSum ([3,3], 6))//[ 0, 1 ]
console.log(twoSum ([3,2,3], 6))//[0,2]
