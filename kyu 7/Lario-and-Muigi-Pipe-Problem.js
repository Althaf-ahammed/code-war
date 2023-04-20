// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    let stop = Math.max(...numbers)
    let start = Math.min(...numbers)
    return Array.from({ length: (stop - start) +1 }, (_, i) => start + i );
  }