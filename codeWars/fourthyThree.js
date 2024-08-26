function combat(health, damage) {
  // Write your code here
  const result = health - damage;
  return result >= 0 ? result : 0
}

console.log(combat(100, 5)) //, 95);
console.log(combat(92, 8)) //, 84);
console.log(combat(20, 30)) //, 0, "Health cannot go below 0");