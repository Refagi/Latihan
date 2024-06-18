
var addTwoNumbers = function(l1, l2) {
  let changeL1 = l1.reverse().toString().split(',').join('');
  let changeL2 = l2.reverse().toString().split(',').join('');
  let count = Number(changeL1) + Number(changeL2)
  let changeNum = num => Number(num)
  return Array.from(String(count), changeNum)
};
console.log(addTwoNumbers([2,4,3], [5,6,4]))//[ 7, 0, 8 ]
console.log(addTwoNumbers([0], [0]))//[0]
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))
/*[
  8, 9, 9, 9,
  0, 0, 0, 1
]
*/



// Definisi untuk node dari linked list
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0);  // Dummy node untuk memulai linked list
  let current = dummy;          // Pointer untuk membangun hasil linked list
  let carry = 0;                // Variabel untuk menangani carry

  // Iterasi selama masih ada digit yang tersisa atau carry yang belum diproses
  while (l1 !== null || l2 !== null || carry > 0) {
      let sum = carry;
      if (l1 !== null) {
          sum += l1.val;
          l1 = l1.next;
      }
      if (l2 !== null) {
          sum += l2.val;
          l2 = l2.next;
      }

      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
  }

  return dummy.next;  // Mengembalikan linked list hasil penjumlahan
};

// Helper function untuk membuat linked list dari array (untuk pengujian)
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
  }
  return dummy.next;
}

// Helper function untuk mencetak linked list (untuk pengujian)
function listToArray(list) {
  let result = [];
  while (list !== null) {
      result.push(list.val);
      list = list.next;
  }
  return result;
}

// TEST CASES
console.log(listToArray(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4])))); // [7, 0, 8]
console.log(listToArray(addTwoNumbers(arrayToList([0]), arrayToList([0])))); // [0]
console.log(listToArray(addTwoNumbers(arrayToList([9, 9, 9, 9, 9, 9, 9]), arrayToList([9, 9, 9, 9])))); // [8, 9, 9, 9, 0, 0, 0, 1]
