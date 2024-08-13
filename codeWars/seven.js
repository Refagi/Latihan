 
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
   let name;
   switch(id){
     case 1:
       name = 'Mercury'
       break
     case 2:
       name = 'Venus'
       break
     case 3:
       name = 'Earth'
       break
     case 4:
       name = 'Mars'
       break
     case 5:
       name = 'Jupiter'
       break
     case 6:
       name = 'Saturn'
       break
     case 7:
       name = 'Uranus'
       break
     case 8:
       name = 'Neptune'
       break
   }
   
   return name;
 }
 console.log(getPlanetName(2))//venus
 console.log(getPlanetName(5))//jupiter
 console.log(getPlanetName(3))//earth
