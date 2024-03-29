// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1

function countSmileys(arr) {
    let count = 0
    arr.forEach((el)=>{
      if(el[0]===';' || el[0]===':'){
        if((el.length===3 && (el[1]==='-' || el[1]==='~')) || el.length===2){
          
        
        if(el[el.length-1]===')' || el[el.length-1]==='D'){
        count++
        }
      }
      }
      
    })
    return count
  }