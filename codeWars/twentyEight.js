function Hero (name) {
  // add default values here
  return {
    name: !name ? "Hero" : name, 
    experience: 0, 
    health: 100, 
    position: '00', 
    damage: 5,
  }
};

let myHero = new Hero("Greg")
console.log(myHero)

