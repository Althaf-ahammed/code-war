// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
    let result='' +n
    for(let i = String(n).length-1;i>0;i--){
      console.log(String(n)[i])
      if(String(n)[String(n).length-1] !=0){
        i =-1
      }
     if( String(n)[i] === '0' && String(n)[i-1] != '0'){
       result = result.slice(0,i)
       i=-1
     }  
    }
    return  Number(result)
  }