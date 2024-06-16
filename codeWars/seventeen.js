 
 function meeting(s) {
  let cekOne = s.split(';')
  let arr2 = []
  for (let i = 0; i < cekOne.length; i++){
   let arr = cekOne[i].split(':')
   let besar1 = arr[0].toUpperCase()
   let besar2 = arr[1].toUpperCase()
   arr2.push(`(${besar2}, ${besar1})`)
  }
   for (let j = 0; j < arr2.length; j++){
       for (let k = 0; k < arr2.length - 1; k++){
           if (arr2[k] > arr2[k + 1]){
               let result = arr2[k]
               arr2[k] = arr2[k+1]
               arr2[k+1] = result
           }
       }
   }
   return arr2.join('')
   // your code
}
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))
//"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
