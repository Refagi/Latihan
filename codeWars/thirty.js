
function _if(bool, func1, func2) {
 //...
 if (bool) {
  return func1(); // Jika `bool` bernilai true, jalankan `func1`
} else {
  return func2(); // Jika `bool` bernilai false, jalankan `func2`
}
};

// Tes pertama: memeriksa ketika `bool` adalah `true`
let testvar1 = 0;
_if(true, () => { testvar1 = 42; }, () => { testvar1 = 0; });
console.log(testvar1 === 42 ? "Test passed: func1 executed as expected" : "Test failed: func1 was not executed");

// Tes kedua: memeriksa ketika `bool` adalah `false`
let testvar2 = 0;
_if(false, () => { testvar2 = 0; }, () => { testvar2 = 42; });
console.log(testvar2 === 42 ? "Test passed: func2 executed as expected" : "Test failed: func2 was not executed");
