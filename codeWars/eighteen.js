 
 function toCamelCase(str){
  let cek1 = str.split('_')
  let arr = []
  let cek2 = str.split('-')

  for (let i = 0; i < cek1.length; i++){
     if (cek1.length > 1){
      arr.push(cek1[i])
     }
  }
  for (let j = 0; j < cek2.length; j++){
      if (cek2.length > 1){
          arr.push(cek2[j])
      }
  }
  let result2 = ''
  let result = arr[0]
  for (let k = 0; k < arr.length; k++){
        arr[k] = arr[k].replaceAll(arr[k][0], arr[k][0].toUpperCase())
       result2 = arr.slice(1)
  }
  let result5 = ''
 let result3 = result + result2
 let result4 = result3.split(',')
 for (let h = 0; h < result4.length; h++){
  result5 += result4[h]
 }
 if (arr.length === 0){
  return " "
 }

 return result5
}
console.log(toCamelCase(''))
console.log(toCamelCase("the_stealth_warrior"))//theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior"))//TheStealthWarrior
console.log(toCamelCase("A-B-C"))//ABC