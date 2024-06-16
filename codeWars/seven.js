 
 function evenOrOdd(number) {
   
  if (number % 2 === 0){
   return 'even'
  } else {
   return 'Odd'
  }
}
console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(-7))
console.log(evenOrOdd(0))


function getPlanetName(id){
   var id;
   switch(id){
     case 1:
       id = 'Mercury'
       break
     case 2:
       id = 'Venus'
       break
     case 3:
       id = 'Earth'
       break
     case 4:
       id = 'Mars'
       break
     case 5:
       id = 'Jupiter'
       break
     case 6:
       id = 'Saturn'
       break
     case 7:
       id = 'Uranus'
       break
     case 8:
       id = 'Neptune'
       break
   }
   
   return id;
 }
 console.log(getPlanetName(2))//venus
 console.log(getPlanetName(5))//jupiter
 console.log(getPlanetName(3))//earth
