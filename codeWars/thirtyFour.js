function whatday(num) { 
  // put your code here
  let result
  switch(num){
    case 1:
      result = 'Sunday';
      break
    case 2:
      result = 'Monday';
      break
    case 3:
      result = 'Tuesday';
      break
    case 4:
      result = 'Wednesday';
      break
    case 5:
      result = 'Thursday';
      break
    case 6:
      result = 'Friday';
      break
    case 7:
      result = 'Saturday';
      break
    default:
      result = 'Wrong, please enter a number between 1 and 7';
  }

  return result
}
console.log(whatday(1)) //,'Sunday')
console.log(whatday(2)) //, 'Monday')
console.log(whatday(3)) //,'Tuesday')
console.log(whatday(8)) //,  'Wrong, please enter a number between 1 and 7')
console.log(whatday(20)) //,  'Wrong, please enter a number between 1 and 7')