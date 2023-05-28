// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

function rowWeights(array){
  let team1 = 0
  let team2 = 0
  array.forEach((el,index)=>{
    if(index%2===0){
      team1+=el
    }else{
      team2+=el
    }
  })
  return [team1,team2]
}