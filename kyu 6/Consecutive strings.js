// You are given an array(list) strarr of strings and an integer k.
//  Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
// longest_consec(strarr, 2) should return "folingtrashy".

function longestConsec(strarr, k) {
    let newStr = ''
    let result = ''
      if(strarr.lenth === 0 || k>strarr.length || k<=0){
        return ""
      }
    else{
      for(let i = 0;i<=strarr.length;i++){
       newStr = strarr.slice(i,i+k).join('')
        if(newStr.length > result.length){
          result = newStr
        }
      }
    }
    return result
  }