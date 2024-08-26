function findSmallestInt(arr) {
  //your code here
  let result = arr[0]
  arr.forEach(element => {
    if(element < result){
      result = element
    }
  });
  return result;
}

console.log(findSmallestInt([78,56,232,12,8])) //,8, `findSmallestInt([78,56,232,12,8])`);
console.log(findSmallestInt([78,56,232,12,18])) //,12, `findSmallestInt([78,56,232,12,18])`);
console.log(findSmallestInt([78,56,232,412,228])) //,56, `findSmallestInt([78,56,232,412,228])`);
console.log(findSmallestInt([78,56,232,12,0])) //,0, `findSmallestInt([78,56,232,12,0])`);
console.log(findSmallestInt([1,56,232,12,8])) //,1, `findSmallestInt([1,56,232,12,8])`);