function expressionMatter(a, b, c) {
  // highest achievable result
  let num1 = a * (b + c);
  let num2 = a * b * c;
  let num3 = a + b * c;
  let num4 = (a + b) * c
  let num5 = a + b + c;
  let tampung = []
  tampung.push(num1, num2, num3, num4, num5)
  let cek = tampung[0]
  for(let i = 0; i <= tampung.length; i++){
    if(tampung[i] > cek){
      cek = tampung[i]
    }
  }
  return cek
  
  //cara cepat
  // return Math.max(num1, num2, num3, num4, num5)
}

console.log('Small: ')
console.log(expressionMatter(2, 1, 2)) //, 6);
console.log(expressionMatter(2, 1, 1)) //, 4);
console.log(expressionMatter(1, 1, 1)) //, 3);
console.log(expressionMatter(1, 2, 3)) //, 9);
console.log(expressionMatter(1, 3, 1)) //, 5);
console.log(expressionMatter(2, 2, 2)) //, 8);

console.log('Medium: ')
console.log(expressionMatter(5, 1, 3)) //, 20);
console.log(expressionMatter(3, 5, 7)) //, 105);
console.log(expressionMatter(5, 6, 1)) //, 35);
console.log(expressionMatter(1, 6, 1)) //, 8);
console.log(expressionMatter(2, 6, 1)) //, 14);
console.log(expressionMatter(6, 7, 1)) //, 48);

console.log('Mixed: ')
console.log(expressionMatter(2, 10, 3)) //, 60);
console.log(expressionMatter(1, 8, 3)) //, 27);
console.log(expressionMatter(9, 7, 2)) //, 126);
console.log(expressionMatter(1, 1, 10)) //, 20);
console.log(expressionMatter(9, 1, 1)) //, 18);
console.log(expressionMatter(10, 5, 6)) //, 300);
console.log(expressionMatter(1, 10, 1)) //, 12);