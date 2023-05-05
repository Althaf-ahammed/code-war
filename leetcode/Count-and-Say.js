// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit.
//  Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

//  Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

var countAndSay = function(n) {
let say = '1';
  while (n > 1) {
    let count = 0;
    let next = '';
    for (let i = 0; i <= say.length; i++) {
      if (i === say.length || (i > 0 && say[i] !== say[i - 1])) {
        next += count + say[i - 1];
        count = 0;
      }
      count++;
    }
    say = next;
    n--;
  }
  return say;
}