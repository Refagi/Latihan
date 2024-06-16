function xo (baris, kolom){

  for (let i = 1; i <= baris; i++){
      let result = ''
      for (let j = 1; j <= kolom; j++ ){
          if ((i + j) % 2 !== 0){
              result += 'O' + ' '
          } else {
              result += 'X' + ' '
          }
      }
      console.log(result)
  }

}

console.log(xo(3, 5))
// X O X O X 
// O X O X O
// X O X O X