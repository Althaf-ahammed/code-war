// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

var isPerfectSquare = function(num) {
    if(num ==1)return true
    let left = 2;
    let right = Math.floor(num/2);
    while(left <= right){
        let middle = Math.floor((left + right)/2)
        let sqr = middle * middle;
        if(sqr == num){
            return true
        }else{
            if(sqr > num){
              right = middle -1
            }else{
                left = middle + 1
            }
        }  
    }
    
    return false
};