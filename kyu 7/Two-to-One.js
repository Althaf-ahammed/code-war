// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let result = []
  s1.split('').forEach((el)=>{
    if(! result.includes(el)){
      result.push(el)
    }
  })
  s2.split('').forEach((el)=>{
    if(! result.includes(el)){
      result.push(el)
    }
  })
  return result.sort().join('')
}