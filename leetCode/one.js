function premierLeagueStandings(teamStandings) {
  let arr = []
  let arr2 = []
  for (const key in teamStandings){
      arr.push(teamStandings[key])
  }
  let first = arr[0]
  for (let j = 0; j < arr.length; j++){
      if (arr[j] === first){
          continue
      }
   arr2.push(arr[j])
  }
  const obj = {1: first}
  for (let i = 0; i < arr2.length; i++){
      for (let l = 0; l < arr2.length - 1; l++){
          if (arr2[l] > arr2[l + 1]){
              let result = arr2[l]
              arr2[l] = arr2[l + 1]
              arr2[l + 1] = result
          }
      }
      
  }
  for (let k = 0; k < arr2.length; k++){
      obj[k + 2] = arr2[k]
  }
  return obj
}
console.log(premierLeagueStandings({1:'Arsenal'}))
//{1:'Arsenal'}
console.log(premierLeagueStandings({2:'Arsenal', 3:'Accrington Stanley', 1:'Leeds United'})) 
// {1:'Leeds United', 2:'Accrington Stanley', 3:'Arsenal'} 
console.log(premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'})) 
// {1:'Leeds United', 2:'Arsenal', 3:'Coventry', 4:'Liverpool', 5:'Manchester City'} 
