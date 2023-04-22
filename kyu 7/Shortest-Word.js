// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let len = 100000
  s.split(' ').forEach((word)=>{
   if( len >word.length)  len =word.length
  })
  return len
}