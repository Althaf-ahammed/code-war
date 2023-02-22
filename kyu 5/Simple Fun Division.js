// You are given three positive integers t, a, b.
//  Your task is to establish whether (t^a - 1)/(t^b -1) is an integer with less than 100 digits.

// Return the result of (t^a - 1)/(t^b -1) in string format, if the result is an integer with less than 100 digits.
//  Otherwise, return "Not an integer with less than 100 digits".

function division(t,a,b){
  let res = (Math.pow(t,a)-1)/(Math.pow(t,b)-1)
  if(Number.isInteger(res) && String(res).length < 100){
    return String(res)
  }else{
    return "Not an integer with less than 100 digits"
  }
}