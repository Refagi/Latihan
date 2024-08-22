function howMuchILoveYou(nbPetals) {
  // your code
  const kata = {1:"I love you", 2:"a little", 3:"a lot", 4:"passionately", 5:"madly", 6:"not at all"};
  if(nbPetals > 6){
    kata[0] = kata[6]
    delete kata[6]
    return kata[(nbPetals % 6)]
  } else {
    return kata[nbPetals]
  }
}

console.log(howMuchILoveYou(7)) //,"I love you")
console.log(howMuchILoveYou(3)) //,"a lot")
console.log(howMuchILoveYou(6)) //,"not at all")
console.log(howMuchILoveYou(482)) // "not at all"
console.log(howMuchILoveYou(144)) // "not at all"