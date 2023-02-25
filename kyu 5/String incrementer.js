// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
  let arr = strng.split('')  

  for(let i = arr.length-1;i>=0;i--){
    if(Number.isInteger(Number(arr[i])) ){
      if(arr[i] !='9'){
      arr[i] = Number(arr[i])+1
      i = -1
      }
      else if(arr[i] ==='9'){
        if(Number.isInteger(Number(arr[i-1]))){
      arr[i] = 0
        }else{
          arr[i] = 1
          arr.push(0)
          i = -1
        }

    }
    }
    else {
      arr.push(1)
      i = -1
    }
  }
  
   return arr.join('')
}