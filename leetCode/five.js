//buatlah algoritma untuk menentukan luas persegi panjang, keliling persegi panjang, dan panjang diagonalnya, 
//lengkapi program dengan pilihan menu : 1)luas 2) keliling 3)panjang diagonal 4)keluar program. 
//pada setiap pilihan menu, dibaca panjang dan lebar empat persegi panjang.
//luas persegi panhang = P * L,  keliling = 2*P + 2*L,  panjang diagonal = sqrt(P*P + L*L)


function menghitugPersegiPanjang (panjang, lebar, angka){

    console.log('silahkan pilih angka (1-4)')
    console.log('1. Menghitung Luas Persegi Panjang')
    console.log('2. Menghitung Keliling Persegi Panjang')
    console.log('3. Menghitung Panjang Diagonal Persegi Panjang')
    console.log('4. Keluar program')
    console.log('===========')

    let Luas = panjang * lebar
    let Keliling = ((2 * panjang) + (2 * lebar))
    let panjangDiagonal = Math.sqrt((panjang * panjang) + (lebar * lebar))
 
  switch (angka) {
      case 1 : 
      angka = `luas Persegi Panjang = ${Luas}`
      break
      case 2 :
      angka = `Keliling Persegi Panjang = ${Keliling}`
      break
      case 3 :
      angka = `Panjang Diagonal Persegi Panjang = ${panjangDiagonal}`
      break
      case 4 :
      angka = `Keluar Program`
      break
      default:
      angka = 'angka tidak dalam jangkauan'
      break
  }
  return angka
}
console.log(menghitugPersegiPanjang(5, 7, 2))




// Input: pref = [5,2,0,3,1]
// Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// - pref[0] = 5.
// - pref[1] = 5 ^ 7 = 2.
// - pref[2] = 5 ^ 7 ^ 2 = 0.
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
// Example 2:

// Input: pref = [13]
// Output: [13]
// Explanation: We have pref[0] = arr[0] = 13.

var findArray = function(pref) {
  if (pref.length <= 1){
      return pref
  }
  let result = []
  for (let i = 0; i < pref.length; i++){
      result.push(pref[i] ^ pref[i+1])
  }
  result.unshift(pref[0])
  result.pop()
  return result
};
console.log(findArray([5,2,0,3,1]))//[5,7,2,3,2]
console.log(findArray([13]))//[13]