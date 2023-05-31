// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let f = 0
  let sum = 0
  console.log(arr)
  arr.forEach((el)=>{
    if(Number.isInteger(el)){
      if(el%2!==0){
      sum += el**3
      }
    }else{
      f = 1
    }
  })
return f ? undefined : sum;
}