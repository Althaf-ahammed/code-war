// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.
//  What's the use of saying "Eureka"? Because this sum gives the same number:
// 89 = 8^1 + 9^2
// We need a function to collect these numbers, that may receive two integers a,b that defines the range [a,b] (inclusive) 
// and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  let result = []
  for(let i=a;i<b;i++){
    let num = String(i).split('').reduce((sum,digits,index)=> sum + digits**(index+1),0)
    if(num === i){
      result.push(i)
    }
  }
  return result
}