
function solve(s){
  let result = s.match(/\d+/g)
  return Math.max(...result)
//(...)Ini digunakan karena Math.max() argumen-argumen harus yang terpisah, bukan array. 
//Dengan menggunakan spread operator, kita dapat mengubah array menjadi argumen terpisah sehingga Math.max()
// dapat berfungsi dengan benar. contoh, 
//jika result berisi [12, 695, 1], menggunakan Math.max(...result) akan menjadi ekivalen dengan Math.max(12, 695, 1)
   //..
};
console.log(solve('gh12cdy695m1'))//695
console.log(solve('2ti9iei7qhr5'))//9
console.log(solve('vih61w8oohj5'))//61
console.log(solve('f7g42g16hcu5'))//42
console.log(solve('lu1j8qbbb85'))//85