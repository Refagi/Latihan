function remove (string) {
  //coding and coding....
  let cek = string.split('!').join('')
  return `${cek}!`
}

console.log(remove("Hi!")) //, "Hi!");
console.log(remove("Hi!!!")) //, "Hi!");
console.log(remove("!Hi")) //, "Hi!");
console.log(remove("!Hi!")) //, "Hi!");
console.log(remove("Hi! Hi!")) //, "Hi Hi!");
console.log(remove("Hi")) //, "Hi!");