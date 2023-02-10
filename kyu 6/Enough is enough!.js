function deleteNth(arr,n){
  let count = {}
  return arr.filter((num)=>{
    count[num] = (count[num]||0) +1
    return count[num] <= n
  })
}