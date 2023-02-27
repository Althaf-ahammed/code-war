// You are going to be given an array of integers.
//  Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum
//  of the integers to the right of N.
//  If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array,
//  the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array,
//  the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

function findEvenIndex(arr)
{
  let index 
  for(let i =0;i<=arr.length-1;i++){
    let arr1 = arr.slice(0,i)
    let arr2 = arr.slice(i+1)
    let sum1 = arr1.reduce((sum,num)=>sum+num,0)
    let sum2 = arr2.reduce((sum,num)=>sum+num,0)
    if(sum1 === sum2){
      index = i
      i = arr.length +1
    }
  }
  return index == 0 || index ? index : -1
}