multiplicationTable = function(size) {
  let arr1 = []
  for (let j = 1; j <= size; j++){
      let arr2 = []
      for (let k = 1; k <= size; k++){
          arr2.push(j * k)
      }
      arr1.push(arr2)
  }
  return arr1
  // insert code here
}
console.log(multiplicationTable(3))//[[1,2,3], [2,4,6], [3,6,9]]