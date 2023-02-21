// You will be given a number and you will need to return it as a string in Expanded Form.

//  For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  let number  = String(num)
  let result = ''
  for(let i = 0;i<number.length;i++){
    if(number.charAt(i) !=0){
    if(result ===''){
      result += `${number.charAt(i)}`
    }else{
    result += ` + ${number.charAt(i)}`
    }
    for(let j = i;j<number.length-1;j++){
     result+= `0`
      }
      }
  }
  return result
}