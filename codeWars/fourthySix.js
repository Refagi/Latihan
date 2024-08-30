// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}


function circleArea(circle){
  // your code here
  const result = Math.PI
  return result * (circle.radius**2)

  // return circle
}


const center = new Point(10, 10); // Membuat titik pusat lingkaran
const circle = new Circle(center, 30); // Membuat lingkaran dengan titik pusat dan radius
const area = circleArea(circle); // Menghitung luas lingkaran
console.log(area)

// console.log( +circleArea( new Circle( new Point(10, 10), 30)).toFixed(6), 2827.433388)
// console.log( +circleArea( new Circle( new Point(25, -70), 30)).toFixed(6), 2827.433388)
// console.log( +circleArea( new Circle( new Point(-15, 5), 0)).toFixed(6), 0)
// console.log( +circleArea( new Circle( new Point(-15, 5), 12.5)).toFixed(6), 490.873852)
