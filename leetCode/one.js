/**
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


function lengthOfLongestSubstring (s) {
  let count = [];
  let left = 0;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    if(count[s[right]] !== undefined && count[s[right]] >= left){
      left = count[s[right]] + 1;
    }
    // console.log('left: ', left)
    count[s[right]] = right;
    // console.log('right: ', right)

    result = Math.max(result, (right - left + 1));
    // console.log('result: ', result, '\n')
  }
  return result;
};


console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); //3
