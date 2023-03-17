// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
  word = word.toLowerCase()
    let result = ''
      let arr = []
      let repeating = []
    for(let i = 0;i<word.length;i++){
    if(arr.includes(word[i])){
      repeating.push(word[i]) 
    }else{
      arr.push(word[i])
    arr.push(word[i])  
}  
}
  for(let i= 0;i<word.length;i++){
    if(repeating.includes(word[i])){
       result += ")"
       }else{
      result += "("      
    }
  }
  return result
}