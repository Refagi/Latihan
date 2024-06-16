function order (word){
  let change = word.split(" ")
  for (let i = 0; i < change.length; i++){
      for (let j = 0; j < change.length - 1 ; j++){
          let cek1 = Number(change[j].match(/\d/g))
          let cek2 = Number(change[j + 1].match(/\d/g))
          
          if (cek1 > cek2){
              let result1 = change[j]
              change[j] = change[j + 1]
              change[j + 1] = result1
          }
      }
  }
  return change.join(" ")
}
console.log(order("is2 Thi1s T4est 3a"))//Thi1s is2 3a T4est
console.log(order("4of g3ood Thi1s pe6ople Th5e the2"))//Thi1s the2 g3ood 4of Th5e pe6ople
console.log(order(""))//""