function validateCode (code) {
  //your code here
  let result = /^[123]/g;
  let change = result.test(code.toString())
  return change
}

console.log(validateCode(123)) //, true);
console.log(validateCode(248)) //, true);
console.log(validateCode(8)) //, false);
console.log(validateCode(321)) //, true);
console.log(validateCode(9453)) //, false);