// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let index = []
  let odd = array.filter((el,i)=>el%2!==0 && index.push(i) ).sort((a,b)=>a-b)
  odd.forEach((el,i)=>{
    array[index[i]] = el 
  })
  return array
}