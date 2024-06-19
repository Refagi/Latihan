
var isPalindrome = function(x) {
  let change = x.toString()
  let result = ''
  for (let i = change.length - 1; i >= 0; i--){
    result += change[i]
  }
  if (x === parseInt(result)){
      return true
  } else {
      return false
  }
};
console.log(isPalindrome(121))//true
console.log(isPalindrome(-121))//false
console.log(isPalindrome(10))//false



// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999]

var romanToInt = function(s) {
  let obj = {
      'I' : 1,
      'V' : 5,
      'X' : 10,
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000}
      let count = 0
      for (let i = 0; i < s.length; i++){
          const first = obj[s[i]]
          const second = obj[s[i+1]]
      if (second > first){
          count += second - first
          i++//skip ke i berikutnya
      } else {
          count += first
      }
  }
  return count

};
console.log(romanToInt("III"))//3
console.log(romanToInt("LVIII"))//58
console.log(romanToInt("MCMXCIV"))//1994