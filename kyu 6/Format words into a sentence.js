// Complete the method so that it formats the words into a single comma separated value.
//  The last word should be separated by the word 'and' instead of a comma.
//  The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

// Example: (Input --> output)

function formatWords(words){
    if(words === null) return ''
    while(words[words.length-1] === ''){
      words.pop()
    }
    let result = ''
    words.forEach((word,i)=>{
      if(word != ''){
        if(i === words.length-1 && result != ''){
          result += ` and ${word}`
        }else{
          if(result === ''){
            result += word
          }else{
          result += `, ${word}`
          }
        }
      }
    })
    return result
  }