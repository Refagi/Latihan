function isTuringEquation(s){
  //coding and coding..
  let num1, num2, num3
  let test = s.split(/[+=]/g)
  num1 = test[0].split('').reverse().join('')
  num2 = test[1].split('').reverse().join('')
  num3 = test[2].split('').reverse().join('')
  return Number(num1) + Number(num2) === Number(num3)
}


console.log(isTuringEquation("73+42=16")) //,true)
console.log(isTuringEquation("5+8=13")) //,false)
console.log(isTuringEquation("10+20=30")) //,true)
console.log(isTuringEquation("0001000+000200=00030")) //,true)
console.log(isTuringEquation("1234+5=1239")) //,false)
console.log(isTuringEquation("1+0=0")) //,false)
console.log(isTuringEquation("7000+8000=51")) //,true)
console.log(isTuringEquation("0+0=0")) //,true)