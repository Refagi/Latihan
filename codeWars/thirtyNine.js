function grader(score) {
  if(score >= 0.9 && score <= 1){
    return 'A'
  } else if (score >= 0.8  && score < 0.9) {
    return 'B'
  } else if (score >= 0.7 && score < 0.8){
    return 'C'
  } else if (score >= 0.6 && score < 0.7){
    return 'D'
  } else {
    return 'F'
  }
};

console.log(grader(0.7)) //, "C");
console.log(grader(0.9)) //, "A");
console.log(grader(0.6)) //, "D");
console.log(grader(0))