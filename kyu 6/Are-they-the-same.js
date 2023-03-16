// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
//  with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here,
//   that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19,
//  25921 the square of 161, and so on

function comp(array1, array2){
  if(array1===null || array2 === null){
    return false
  }
  array2 = array2.sort((a,b)=>a-b) 
  let flag = true
  array1.sort((a,b)=>a-b).forEach((num,i)=>{
    if(num*num!=array2[i]){
      flag  =false
    }
  })
  return flag
}