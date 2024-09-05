function reverse(string){
  //your code here
  let result = string.split(' ').reverse().join(' ')
  return result
}

console.log(reverse('I am an expert at this')) //, 'this at expert an am I');
console.log(reverse('This is so easy')) //, 'easy so is This');
console.log(reverse('no one cares')) //, 'cares one no');
console.log(reverse('')) //, '');
console.log(reverse('CodeWars')) //, 'CodeWars');