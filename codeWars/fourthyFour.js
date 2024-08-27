function getCount(str) {
  let count = 0
  const abjad = ['a', 'e', 'i', 'u', 'o'];
  for(let i = 0; i <= abjad.length; i++){
    for(let j = 0; j < str.toLowerCase().length; j++){
      if(abjad[i] === str[j]){
        count++
      }
    }
  }
  return count

  //cara cepat
  // return str.toLowerCase().split('').filter(char => abjad.includes(char)).length;
}

console.log(getCount("abracadabra")) //, 5) ;