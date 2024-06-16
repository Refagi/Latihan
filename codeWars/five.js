
function addBinary(a,b) {
  let result = a + b
return result.toString(2)//jadi method ini untuk mengconvert bilangan desimal ke biner
}
console.log(addBinary(1, 1))//'10'
console.log(addBinary(5, 9))//'1110'

function checkAlive (health) {
  if (health > 0) {
    return true
  } else {
    return false
  }
}
console.log(checkAlive(5))
console.log(checkAlive(0))

 // basis angka
 var num = 6;
 console.log(num.toString(2)); // "1111" (basis 2 atau biner)
 console.log(num.toString(8)); // "17" (basis 8 atau oktal)
 console.log(num.toString(10)); // "15" (basis 10 atau desimal)
 console.log(num.toString(16)); // "f" (basis 16 atau heksadesimal)
 var num = 15;
 console.log(num.toString(3)); // "120" (basis 3 atau ternary)
 console.log(num.toString(4)); // "33" (basis 4 atau quaternary)
 console.log(num.toString(5)); // "30" (basis 5 atau quinary)
 console.log(num.toString(6)); // "23" (basis 6 atau senary)
 
 // jdi cara hitung biner sperti ini, jika sisa = 0, maka return 0, jika sisa = 1, maka return 1
 // misal 6, 6 % 2 = 3 sisa 0, 3 % 2 = 1 sisa 1, 1 % 2 = 0 sisa 1 jadi binernya =  110 