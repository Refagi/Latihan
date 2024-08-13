function solution(str){
  let cek = str.split('').reverse().join('')
  return cek
}

console.log(solution('world'))
console.log(solution('hello'))
console.log(solution(''))
console.log(solution('h'))