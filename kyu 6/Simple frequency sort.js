// In this kata, you will sort elements in an array by decreasing frequency of elements.
//  If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

function solve(arr){
  let obj ={}
  arr.forEach((num)=>{
    if(obj[num]){
      obj[num]=obj[num]+1
    }else{
      obj[num]= 1
    }
  })
  return arr.sort((a,b)=>obj[b]-obj[a] || a-b)
}