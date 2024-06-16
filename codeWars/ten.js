 
 function countAnimals(animals,count){
  let cek = animals.split(',')
  let arr = []
  for (let i = 0; i < count.length; i++){
    let result = 0
    for (let j = 0; j < cek.length; j++){
      if (cek[j] === count[i]){
        result++
      }
    }
    arr.push(result)
  }
  return arr
  }
  console.log(countAnimals("dog,cat",["dog","cat"])) // menampilkan [1, 1]
  console.log(countAnimals("dog,cat",["dog","cat","pig"])) // menampilkan [1, 1, 0]
  console.log(countAnimals("dog,dog,cat",["dog","cat"]))//[2,1]
  console.log(countAnimals("dog,dog,cat",["pig","cow"]))//[0,0]