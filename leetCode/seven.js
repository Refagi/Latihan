
/*Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.*/
 
var longestCommonPrefix = function(strs) {
  if (strs.length === 0){
      return ""
  }  

  let change = strs.sort()
  let first = change[0]
  let last = change[change.length-1]

 for (let i = 0; i < first.length; i++){
/*jadi ini membandingkan string pertama dengan terakhir , first diatur menjadi "flower", dan last diatur menjadi 
"flow" setelah diurutkan.
 Pada iterasi pertama loop,ini membandingkan "f" dengan "f", yang sama, jadi melanjutkan ke karakter berikutnya.
Pada iterasi kedua, ini membandingkan "l" dengan "l", juga sama, jadi ini melanjutkan ke karakter berikutnya.
Pada iterasi ketiga, ini membandingkan "o" dengan "i", yang berbeda, 
sehingga ini mengembalikan potongan "first" sejauh itu, yaitu "fl".*/
  if (first[i] !== last[i]){
      return first.slice(0,i)
  }
 }
 return first //return first lagi untuk 
 /*Jika loop selesai tanpa mengembalikan hasil sebelumnya (tidak ada karakter yang berbeda ditemukan),
  maka first adalah awalan bersama terpanjang di antara semua string dalam array.
  Oleh karena itu, di luar loop, fungsi mengembalikan first sebagai hasil akhir.*/
};
console.log(longestCommonPrefix(["flower","flow","flight"]))//"fl"
console.log(longestCommonPrefix(["dog","racecar","car"]))//""