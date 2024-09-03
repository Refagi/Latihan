function pyramid(s) {
  // return: [vertices, edged, faces, sides]
  return [(((s / 2) - 1) / 2 + 1), ((s / 2) - 1), (((s / 2) - 1) / 2 + 1), (((s / 2) - 1) / 2)];
}

console.log(pyramid(42)) //, [11, 20, 11, 10],
console.log(pyramid(102)) //, [26, 50, 26, 25],
console.log(pyramid(18))//, [5, 8, 5, 4],
console.log(pyramid(58))//, [15, 28, 15, 14],
console.log(pyramid(98))//, [25, 48, 25, 24],
console.log(pyramid(86))//, [22, 42, 22, 21],
console.log(pyramid(70))//, [18, 34, 18, 17],
console.log(pyramid(130)) //, [33, 64, 33, 32],
console.log(pyramid(154)) //, [39, 76, 39, 38],
console.log(pyramid(178)) //, [45, 88, 45, 44],