
function hammingWeight(x) {
  //mamakai bitwise
  let i = 0
  while (x > 0) {
    i += x & 1
    x >>= 1
  }
  return i
}
console.log(hammingWeight(2))


function pillars(numPill, dist, width) {
  let result = ''
  if (numPill > 1){
      let result1 = (numPill - 1) * (dist * 100)
      let result2 = (numPill - 2) * width
      result += result1 + result2
  } else {
      result += 0
  }
  return Number(result)
  // your code here
}
console.log(pillars(1, 10, 10))//0
console.log(pillars(2, 20, 25))//2000
console.log(pillars(11, 15, 30))//15270
