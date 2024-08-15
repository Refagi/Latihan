var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let years = [0, 0, 0];
  for (let i = 1; i <= humanYears; i++){
    if(i > 0 && i < 2){
      years[0] += i;
      years[1] += 15;
      years[2] += 15;
    } else if (i > 1 && i < 3){
      years[0] += 1;
      years[1] += 9;
      years[2] += 9;
    } else {
      years[0] += 1;
      years[1] += 4;
      years[2] += 5;
    }
  }
  return years;
}

console.log(humanYearsCatYearsDogYears(1)) // [1, 15, 15]
console.log(humanYearsCatYearsDogYears(2)) // [2, 24, 24]
console.log(humanYearsCatYearsDogYears(10)) // [10,56,64]