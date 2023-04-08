// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let even = s.split('').map((el,index)=>{
      if(index%2==0){
        return el.toUpperCase()
      }else{
        return el.toLowerCase()
      }
    }).join('')
    let odd = s.split('').map((el,index)=>{
      if(index%2==0){
        return  el.toLowerCase()
      }else{
        return el.toUpperCase()
      }
    }).join('')
    return [even,odd]
  };