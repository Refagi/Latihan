console.time('Execution Time');

function longest(s1, s2) {
  let str1 = s1 + s2;
  let patch = str1.split('').sort().join('');
  let result = {};
  for(let i = 0; i < patch.length; i++){
    if(!result[patch[i]]){
      result[patch[i]] = 1;
    } else {
      result[patch[i]]++;
    }
  }
  return Object.keys(result).join('');
};

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"

console.timeEnd('Execution Time');//for test execution time code
