// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
//  because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let f = 1
    let arr = string.split('').map((letter)=>{
      return letter.toLowerCase().charCodeAt(0) - 96
    })
    let numbers = []
    for(let i =1;i<27;i++){
      numbers.push(i)
    }
    numbers.forEach((num)=>{
      if(arr.includes(num)){
         f *= 1  
      }else{
       f *= 0 
      }
    })
    return f ? true :false
  }