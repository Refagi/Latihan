const find = (array, element) => array.indexOf(element) >= 0 ? array.indexOf(element) : "Not found";//jumlah karakter tidak boleh lebih dari 85

let array = [2,3,5,7,11];
console.log(find(array, 5)) //, 2);
console.log(find(array, 11)) //, 4);
console.log(find(array, 3)) //, 1);
console.log(find(array, 2)) //, 0);
console.log(find(array, 7)) //, 3);
console.log(find(array, 1)) //, "Not found");
console.log(find(array, 8)) //, "Not found");
array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
console.log(find(array, "Hello World")) //, 1);
console.log(find(array, "lorem ipsum")) //, "Not found");
console.log(find(array, "Lorem Ipsum")) //, 3);
console.log(find(array, false)) //, 2);
console.log(find(array, true)) //, 0);
console.log(find(array, Math.PI)) //, 5);
console.log(find(array, 3.14)), // "Not found");
console.log(find(array, 6)) //, 4);