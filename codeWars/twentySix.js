function getChar(c){
  // ...
  const result = String.fromCharCode(c);
  return result
  // const result = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
  // return result[c-32]

};

console.log(getChar(55)) //'7'
console.log(getChar(56)) //'8'
console.log(getChar(57)) //'9'
console.log(getChar(58)) //':'
console.log(getChar(59)) //';'
console.log(getChar(60))//'<'
console.log(getChar(61))//'='
console.log(getChar(62))//'>'
console.log(getChar(63))//'?'
console.log(getChar(64))//'@'
console.log(getChar(65))//'A'
