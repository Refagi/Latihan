var mergeTwoLists = function(list1, list2) {
  let plus = [].concat(list1, list2)
  //let plus = [...list1, ...list2]
  for (let i = 0; i < plus.length; i++){
   for (let j = 0; j < plus.length -1; j++){
       if (plus[j] > plus[j+1]){
           let result = plus[j]
           plus[j] = plus[j+1]
           plus[j+1] = result
       }
   }
  }
  return plus
};
console.log(mergeTwoLists([1,2,4],  [1,3,4]))//[ 1, 1, 2, 3, 4, 4 ]
console.log(mergeTwoLists([], []))//[]
console.log(mergeTwoLists([], [0]))//[ 0 ]