var longestPalindrome = function (s) {
  if(s.length <= 1) return s

  for (let i = 0; i < s.length; i++) {
    let strGanjil = `${s[i]}${s[i + 1]}${s[i + 2]}`;
    let strGenap = `${s[i]}${s[i + 1]}`;
    let re = /[\W_]/g;
    let lowRegStrGanjil = strGanjil.toLowerCase().replace(re, "");
    let reverseStrGanjil = lowRegStrGanjil.split("").reverse().join("");

    let lowRegStrGenap = strGenap.toLowerCase().replace(re, "");
    let reverseStrGenap = lowRegStrGenap.split("").reverse().join("");

    let lowRegStr = s.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split("").reverse().join("");

    if (s.length > 2 && s.length % 2 === 0) {
      if(lowRegStr === reverseStr){
        return s
      }
      if(s.split("").every(char => char === s[0])){
        return s
      }
      if (lowRegStrGenap === reverseStrGenap) {
        return strGenap;
      } 
      if (lowRegStrGanjil === reverseStrGanjil) {
        return strGanjil;
      } 
    } else if(s.length > 2 && s.length % 2 !== 0) {
      if(lowRegStr === reverseStr){
        return s
      }
      if(s.split("").every(char => char === s[0])){
        return s
      }
      if (lowRegStrGanjil === reverseStrGanjil) {
        return strGanjil;
      } 
      if(lowRegStrGenap === reverseStrGenap){
        return strGenap
      }
    } else {
      if(lowRegStrGenap === reverseStrGenap){
        return strGenap
      } else {
        return s[0]
      }
    }
  }
};

//cara yang lebih dinamis
const longestPalindrome = (s) => {
  if (!s || s.length === 0) return "";  // Kasus base untuk string kosong

  let result = "";  // Untuk menyimpan hasil substring terpanjang
  
  // Fungsi untuk memperluas dari pusat
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;   // Perluas ke kiri
      right++;  // Perluas ke kanan
    }
    return s.slice(left + 1, right);  // Mengambil substring palindrome
  };

  // Iterasi melalui setiap karakter di string
  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandAroundCenter(i, i);           // Untuk ganjil (seperti "aba")
    let evenPalindrome = expandAroundCenter(i, i + 1);      // Untuk genap (seperti "abba")
    
    // Update hasil dengan palindrome yang lebih panjang
    result = oddPalindrome.length > result.length ? oddPalindrome : result;
    result = evenPalindrome.length > result.length ? evenPalindrome : result;
  }

  return result;
}

console.log(longestPalindrome("babad")); //aba
console.log(longestPalindrome("cbbd")); //bb
console.log(longestPalindrome("ac")) //a
console.log(longestPalindrome("abb")) // bb
console.log(longestPalindrome("aaaa")) // aa
console.log(longestPalindrome("abcba")) // abcba
console.log(longestPalindrome("aacabdkacaa")) // abcba