function charConcat(string){
  let result1 = ""
  let cek = string.split('')
  for (let i = 1;  cek.length > 1; i++){
   result1 += cek.shift() + cek.pop() + i
   //['a','b','c','','d','e','f'] shift menghapus 'a' dan menambahkan ke result1 dan seterusnya begitu juga 
   //pop 
  } 
  return result1
  //your code here
}
console.log(charConcat("abc def"))//'af1be2cd3'
console.log(charConcat("CodeWars"))//'Cs1or2da3eW4'

