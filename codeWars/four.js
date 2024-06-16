function getASCII(c){
  let result = ''
  for (let i = 0; i < c.length; i++){
    result = c.charCodeAt(0)//jadi method ini adalah untuk mencari urutan ke berapa dalam tabel ASCII
  }//ASCII itu seperti urutan code di amerika setau ku begitu, jadi sperti A itu urutan ke 65 dalam tabel ASCII 
  return result
  // ...
}
console.log(getASCII('A'))//65
console.log(getASCII(' '))//32
console.log(getASCII('!'))//33